import React from 'react'
import { Button } from 'components/Button'
import { styled } from 'components/theme'
import { AppLayout } from 'components/Layout/AppLayout'
import { PageHeader } from 'components/Layout/PageHeader'

export default function Mint() {
  return (
    <AppLayout>
      <PageHeader
        title="Mint"
        subtitle="Mint your CW20 token on Juno."
      />
      	  <div>{'Name'}</div>
      	  <div>{'Symbol'}</div>
      	  <div>{'Description'}</div>
      	  <div>{'Total Supply'}</div>
		      <Button
		        variant="primary"
		        size="large"
		        disabled={false}
		        onClick= {
		        	undefined
		        }
		      >
		        {'Confirm'}
		      </Button>
    </AppLayout>
  )
}