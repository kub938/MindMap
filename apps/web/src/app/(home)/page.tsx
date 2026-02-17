import Link from "next/link";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <main className="flex flex-col w-full max-w-(--home-max-width) mx-auto px-6">
        <section className="py-70">
          <div className=" max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold">무엇이든 트리로 형성</h1>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
              ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
              dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>
            <Button type="black">
              <Link href="/new">Try this</Link>
            </Button>
          </div>
        </section>
        <section className="py-24">
          <div className="mx-auto grid md:grid-cols-2 gap-12 ">
            <div className="space-y-4">
              <h1 className="text-2xl font-semibold">What Is MindNote</h1>
              <p className="text-gray-600">
                노드를 클릭하고 tab을 누르면 리프노드 생성
              </p>
            </div>
            <div className="aspect-video border rounded-xl">gif 칸</div>
          </div>

          {/* hover시 col-span-2개 나오게 */}
          <div className="mt-20 md:grid grid-cols-3 gap-7 ">
            {/* 클릭 가능하게 만들어서 해당 설명으로 갈 수 있게 만듬 */}
            <div className="border py-6 px-6 rounded-xl  ">
              <div className="mb-20">손쉬운 사용</div>
              <div>
                노드의 추가/삭제/수정을 간편하게노드의 추가/삭제/수정을
                간편하게노드의 추가/삭제/수정을 간편하게노드의 추가/삭제/수정을
                간편하게노드의 추가/삭제/수정을 간편하게노드의 추가/삭제/수정을
                간편하게
              </div>
            </div>
            <div className="border p-6 rounded-xl">
              <div>파일 다운 가능 </div>
              <div>자체 파일 형식을 통한 다운 가능</div>
            </div>
            <div className="border p-6 rounded-xl">
              <div> </div>
              <div></div>
            </div>
          </div>
        </section>

        <section className="py-28 ">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold">Tutorial</h2>
            <p className="mt-4 text-gray-600">
              Learn the core shortcuts in seconds.
            </p>
          </div>

          {/* Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16  mb-24">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Tap으로 노드 생성</h3>
              <p className="text-gray-600">
                원하는 위치를 클릭하고 Tab을 누르면 하위 노드가 생성됩니다.
              </p>
            </div>

            <div className="aspect-video rounded-2xl border bg-white shadow-sm flex items-center justify-center">
              gif 영상
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div className="order-2 md:order-1 aspect-video rounded-2xl border bg-white shadow-sm flex items-center justify-center">
              gif 영상
            </div>

            <div className="order-1 md:order-2 space-y-4">
              <h3 className="text-xl font-semibold">Enter로 노드 생성</h3>
              <p className="text-gray-600">
                Enter 키를 사용해 같은 레벨의 노드를 빠르게 추가하세요.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 ">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Cmd / Ctrl + Enter로 바로 수정
              </h3>
              <p className="text-gray-600">
                단축키를 통해 즉시 편집 모드로 전환할 수 있습니다.
              </p>
            </div>

            <div className="aspect-video rounded-2xl border bg-white shadow-sm flex items-center justify-center">
              gif 영상
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
