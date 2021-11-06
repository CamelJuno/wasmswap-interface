import { useState } from 'react'
import { CardWithSeparator } from '../CardWithSeparator'
import { Text } from '../Text'
import { CreditCardIcon } from '@heroicons/react/solid'
import {
  StyledHeader,
  StyledDivForBalance,
  StyledIconWrapper,
} from './card.styles'
import { TokenAmountInput } from '../TokenAmountInput'

export const WalletCardWithInput = ({}) => {
  const [amount, setAmount] = useState(100)
  return (
    <CardWithSeparator
      contents={[
        <>
          <Text type="microscopic" variant="light">
            FROM
          </Text>
          <StyledHeader>
            <StyledIconWrapper
              size="44px"
              color="#1a44af"
              rounded
              $enableGradient
              $enablePadding
              icon={<CreditCardIcon />}
            />
            <div>
              <Text type="body" variant="light">
                Keplr wallet
              </Text>
              <Text
                type="microscopic"
                variant="normal"
                color="gray"
                paddingTop="2"
              >
                cosmos1uw6ls6y8du6d1uw6ls6y8du6d1uw6ls6y
              </Text>
            </div>
          </StyledHeader>
        </>,
        <>
          <StyledDivForBalance>
            <Text type="microscopic" variant="light">
              Max available:{' '}
            </Text>
            <Text
              type="microscopic"
              variant="normal"
              color="lightBlue"
              paddingLeft="2"
            >
              133 JUNO
            </Text>
          </StyledDivForBalance>
          <TokenAmountInput
            value={amount}
            onAmountChange={setAmount}
            maxValue={1000}
          />
        </>,
      ]}
    />
  )
}
