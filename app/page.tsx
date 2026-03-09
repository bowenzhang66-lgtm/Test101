import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        {/* 头像区域 */}
        <div className="mb-8">
          <div className="w-48 h-48 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden flex items-center justify-center">
            <Image
              src="/photo.jpg"
              alt="ChamberZ的照片"
              width={192}
              height={192}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* 姓名 */}
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-6">
          ChamberZ
        </h1>

        {/* 自我介绍 */}
        <p className="text-xl text-zinc-600 dark:text-zinc-400 text-center leading-relaxed">
          我是ChamberZ，我有只小老鼠叫Charlie。
        </p>
      </main>
    </div>
  );
}
