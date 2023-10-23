"use client";
import { Card, Illustration } from '@web3uikit/core';

export default function Home() {
    return (
      <>
        <div className='w-full text-4xl justify-center'>NFT Market Place</div>
        <div
          style={{
            width: '250px'
          }}
        >
          <Card
            description="Create and publish your own NFT Collection"
            onClick={function noRefCheck(){}}
            setIsSelected={function noRefCheck(){}}
            title="NFT Collection"
            tooltipPosition="right"
            tooltipText="Create your very own NFT Collection"
          >
            <div>
              <Illustration
                height="180px"
                logo="chest"
                width="100%"
              />
            </div>
            </Card>
          </div>          
      </>
    )
  }
  