// import { stocksList } from "@/constants";
import Image from "next/image";
import Link from 'next/link'
import React from 'react'

const RightSidebar = ({ user, alarms, stocks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
        <section className="flex flex-col pb-8">
            <div className="profile-banner" />
            <div className="profile">
                <div className="profile-img">
                    <span className="text-5xl font-bold text-blue-500">{user.firstName[0]}</span>
                </div>

                <div className="profile-details">
                    <h1 className="profile-name">
                        {user.firstName} {user.lastName}
                    </h1>
                    <p className="profile-email">
                        {user.email}
                    </p>
                </div>
            </div>
        </section>

        <section className="alarms">
            <div className="flex w-full justify-between">
                <h2 className="header-2">My Stocks</h2>
                <Link href="/" className="flex gap-2">
                    <Image 
                    src="/icons/plus.svg"
                    width={20}
                    height={20}
                    alt="plus"
                    />
                    <h2 className="text-14 font-semibold text-gray-600">
                        Add Stock
                    </h2>
                </Link>
            </div>

            <div>
                {stocks.map((stock) => (
                    <div key={stock.$id} className="stock-item p-2 border-b">
                        <h3 className="text-lg font-semibold">{stock.stockName}</h3>
                        <p className="text-sm text-gray-500">Close Price: ${stock.closePrice.toFixed(2)}</p>
                        <p className="text-sm text-gray-500">Difference: ${stock.difference.toFixed(2)} ({stock.differencePercentage.toFixed(2)}%)</p>
                    </div>
                ))}
            </div>
        </section>
    </aside>
  )
}

export default RightSidebar