'use client'
import { useRouter } from 'next/navigation'
import { Button, Tooltip } from '@heroui/react';
import { ChartPie, Rss } from 'lucide-react';

export default function Header() {
    const router = useRouter()
    return (
        <div className="fixed top-0 left-0 h-full w-28 bg-gray-800">
            <div className='p-10 flex flex-col items-center justify-center space-y-5'>
                <Tooltip
                    content={<div className='text-black'>數據圖</div>}
                    color="default"
                    placement='right'
                >
                    <Button
                        isIconOnly
                        aria-label="Statistic"
                        color="default"
                        onPress={() => router.push("/")}
                    >
                        <ChartPie />
                    </Button>
                </Tooltip>
                <Tooltip
                    content={<div className='text-black'>新聞</div>}
                    color="default"
                    placement='right'
                >
                    <Button
                        isIconOnly
                        aria-label="News"
                        color="default"
                        onPress={() => router.push("/news")}
                    >
                        <Rss />
                    </Button>
                </Tooltip>
            </div>

        </div>
    );
}
