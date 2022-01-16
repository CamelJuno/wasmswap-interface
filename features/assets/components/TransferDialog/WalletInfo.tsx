import { styled } from 'components/theme'
import { Text } from 'components/Text'
import { ConnectIcon } from 'icons/Connect'
import { useRecoilValue } from 'recoil'
import {
  ibcWalletState,
  walletState,
} from '../../../../state/atoms/walletAtoms'
import { IconWrapper } from '../../../../components/IconWrapper'
import { Logo } from '../../../../icons/Logo'
import { CSS } from '@stitches/react'

export const WalletInfo = ({ label, icon, address, css }) => {
  return (
    <StyledDivForWrapper css={css}>
      {icon}
      <div>
        <Text variant="primary">{label}</Text>
        <StyledDivForAddressRow>
          <ConnectIcon color="secondary" size="16px" />
          <Text truncate={true} variant="legend">
            {address || "address wasn't identified yet"}
          </Text>
        </StyledDivForAddressRow>
      </div>
    </StyledDivForWrapper>
  )
}

type WalletInfoProps = {
  css?: CSS
}

export const KeplrWalletInfo = ({ css }: WalletInfoProps) => {
  const { address: ibcWalletAddress } = useRecoilValue(ibcWalletState)

  return (
    <WalletInfo
      css={css}
      label="Keplr wallet"
      icon={<StyledImgForIcon src="/img/keplr-icon.png" alt="Keplr wallet" />}
      address={ibcWalletAddress}
    />
  )
}

export const AppWalletInfo = ({ css }: WalletInfoProps) => {
  const { address: walletAddress } = useRecoilValue(walletState)

  return (
    <WalletInfo
      css={css}
      label={`To ${process.env.NEXT_PUBLIC_SITE_TITLE}`}
      icon={<IconWrapper color="secondary" size="32px" icon={<Logo />} />}
      address={walletAddress}
    />
  )
}

const StyledDivForWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  columnGap: '$space$10',
})

const StyledDivForAddressRow = styled('div', {
  columnGap: '$space$2',
  display: 'flex',
  alignItems: 'center',
})

const StyledImgForIcon = styled('img', {
  width: 32,
  height: 32,
})
