"use client"

export default function Home() {

  const feature: {
    title: string,
    subfeatures: {
      screenshot?: {
        src: string,
      },
      icon: string,
      title: string,
      subtitle: string,
      content: string,
    }[]
  }[] = [
    {
      title: "Introduction",
      subfeatures: [
        {
          title: "Stablecoin",
          subtitle: "想通过算法保持稳定但是不太稳定的稳定币",
          content: "",
          icon: "xxx",
        },
        {
          title: "NFT Market",
          subtitle: "随意交易的NFT市场",
          content: "",
          icon: "xxxx",
        },
        {
          title: "Smart Contract Listener",
          subtitle: "光明正大窃听的智能合约",
          content: "",
          icon: "yes",
        }
      ]
    },
    {
      title: "faucet",
      subfeatures: [],
    }
  ]
  // 本站介绍
  // 一个简单的交易平台
  // 通过领取代币购买NFT
  // 智能合约
  // ipfs

  // Faucet

  // NFT


  // 简单模拟etherscan 监听合约
  return (
    <div>
      <div className="h-[calc(100vh-6rem)] w-full flex justify-center flex-col relative text-center">
        <h2 className="text-4xl sm:text-8xl font-bold mb-5">Introduction</h2>
        <h3 className="mt-3 sm:mt-5 text-black-800 text-2xl sm:text-4xl font-light">CJ's open-source project</h3>
      </div>
      {feature[0].subfeatures.map((feature, index) => (
        <div className="h-[calc(100vh-6rem)] w-full flex justify-center flex-col relative text-center">
          <h2 className="text-4xl sm:text-8xl font-bold mb-5">{feature.title}</h2>
          <h3 className="mt-3 sm:mt-5 text-zinc-800 text-2xl sm:text-4xl font-light">{feature.subtitle}</h3>
        </div>
      ))}        
    </div>
  )
}
