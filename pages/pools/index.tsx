import React, { useState } from 'react'
import styled from 'styled-components'
import { AppLayout } from '../../components/Layout/AppLayout'
import TokenList from '../../public/token_list.json'
import { PoolCard } from '../../components/Pools/PoolCard'
import { PoolDialog } from '../../components/Pools/PoolDialog'
import { TokenInfo } from '../../hooks/useTokenInfo'
import { PageHeader } from '../../components/Layout/PageHeader'

export default function Pools() {
  const [isDialogShowing, setIsDialogShowing] = useState(false)
  const [tokenInfo, setTokenInfo] = useState<TokenInfo>()

  // wire the dialog up with the pools page inside
  // @ts-ignore
  const openDialog = (tokenInfo) => {
    setTokenInfo(tokenInfo)
    setIsDialogShowing(true)
  }

  return (
    <AppLayout>
      <PageHeader
        title="Pools"
        subtitle="Provide liquidity to the market by adding assets to the pools and
        receive swap fees from each trade."
      />

      <StyledDivForPoolsGrid>
        {TokenList.tokens
          .filter((x) => x.token_address)
          .map((token, key) => (
            <PoolCard
              key={key}
              tokenASymbol="JUNO"
              tokenBSymbol={token.symbol}
            />
          ))}
      </StyledDivForPoolsGrid>
      <PoolDialog
        isShowing={isDialogShowing}
        onRequestClose={() => setIsDialogShowing(false)}
        tokenInfo={tokenInfo || {}}
      />
    </AppLayout>
  )
}

const StyledDivForPoolsGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 20px;
  row-gap: 24px;
  padding-bottom: 24px;
`
