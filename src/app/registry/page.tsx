import Button from '@/ui/Button'
import Image from 'next/image'
import PageLayout from '@/components/PageLayout'

export default function Registry() {
    return (
        <PageLayout title="Registry">
            <div className="relative max-w-6xl mx-auto px-6 md:px-16">
                <div className="bg-white border-1 border-stone-800 pb-14 px-6 py-20 md:px-12 flex flex-col items-center text-start relative overflow-hidden">
                    <h1 className="max-w-3xl text-xl md:text-2xl font-serif text-stone-800 mb-10">Many of you are traveling from far and wide to celebrate with us, so your presence means the world and is all we ask for. If you&apos;d still like to contribute to our registry or honeymoon funds, please use the links below.</h1>
                    <div className="flex justify-center">
                        <Button
                            href="https://www.amazon.com/wedding/share/thehumbles"
                            target="_blank"
                            className="px-6 py-3 bg-stone-800 text-[#FAF5F1] hover:bg-stone-700 hover:text-white"
                        >
                            <div className="flex items-center space-x-2 pt-1">
                                <Image
                                    src="/images/amazon.png"
                                    alt="Amazon logo"
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}