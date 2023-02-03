import { Skeleton } from 'moti/skeleton'
import React, { Suspense, type ReactNode } from 'react'
import { ErrorBoundary, type ErrorBoundaryProps } from 'react-error-boundary'
import Carousel, { type TCarouselProps } from 'react-native-reanimated-carousel'
import {
  type CarouselRenderItem,
  type CarouselRenderItemInfo,
} from 'react-native-reanimated-carousel/lib/typescript/types'

import { BankCard } from '../BankCard'
import { Fallback } from '../Fallback'

import { STRINGS } from '~/resources'
import { type CardEntity } from '~/types'
import { width } from '~/utils'

type BankCardsCarouselProps = Omit<
  TCarouselProps<CardEntity>,
  'renderItem' | 'mode' | 'modeConfig'
> & {
  renderItem?: CarouselRenderItem<CardEntity>
}

const defaultRenderItem = ({ item }: CarouselRenderItemInfo<CardEntity>) => {
  return <BankCard {...item} />
}

export const BankCardsCarousel = ({
  renderItem = defaultRenderItem,
  ...rest
}: BankCardsCarouselProps) => {
  return (
    <Carousel
      height={width / 2}
      loop={false}
      mode="parallax"
      modeConfig={{
        parallaxScrollingOffset: width / 4,
      }}
      renderItem={renderItem}
      scrollAnimationDuration={250}
      width={width}
      {...rest}
    />
  )
}

export const BankCardsErrorBoundary = ({
  children,
  onReset,
}: Omit<ErrorBoundaryProps, 'fallbackRender'> & { children: ReactNode }) => {
  return (
    <ErrorBoundary
      fallbackRender={(props) => {
        return (
          <Fallback
            {...props}
            body={STRINGS.BANK_CARD.FALLBACK.DEFAULT_BODY_ERROR}
          />
        )
      }}
      onReset={onReset}
    >
      {children}
    </ErrorBoundary>
  )
}

export const BankCardsErrorBoundaryWithSuspense = ({
  children,
  onReset,
}: Omit<ErrorBoundaryProps, 'fallbackRender'> & { children: ReactNode }) => {
  return (
    <BankCardsErrorBoundary onReset={onReset}>
      <Suspense fallback={<BankCardsCarouselFallback />}>{children}</Suspense>
    </BankCardsErrorBoundary>
  )
}

const CARDS_MOCK = [
  {
    id: 1,
    issuer: 'mastercard',
    name: 'Soy Paisanx',
    expDate: '2026-03-20',
    lastDigits: 1234,
    balance: '978,85',
    currency: 'USD',
  },
  {
    id: 2,
    issuer: 'visa',
    name: 'Soy Paisanx',
    expDate: '2027-03-20',
    lastDigits: 1234,
    balance: '1000,10',
    currency: 'USD',
  },
] satisfies CardEntity[]

export const BankCardsCarouselFallback = () => {
  return (
    <BankCardsCarousel
      data={CARDS_MOCK}
      renderItem={({ item }) => {
        return (
          <Skeleton
            show
            colorMode="light" // TODO: use CURRENT_THEME
          >
            <BankCard {...item} />
          </Skeleton>
        )
      }}
    />
  )
}
