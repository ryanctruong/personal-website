const images = ["/icons/python.png", "/icons/python.png", "/icons/python.png", "/icons/python.png", "/icons/python.png", "/icons/python.png"];
const centerImage = '/beanhead.png';

const Graph = () => {
    return (
        <div className="relative isolate flex w-full flex-col items-center text-white">
            <div className="flex w-full max-w-4xl items-center justify-between max-md:hidden">
                <div className="flex items-center gap-30">
                    <div
                        className="bg-[#F7F5EF] flex size-12 items-center justify-center rounded-xl border-[1.5px] shadow-md lg:size-15"
                    >
                        {images[0] ? (
                            <img
                                src={images[0]}
                                alt=""
                                className="size-7 lg:size-10 object-contain"
                            />
                        ) : null}
                    </div>
                    <span className="size-0.5 max-md:hidden" />
                </div>
                <div className="flex items-center gap-30">
                    <span className="size-0.5 max-md:hidden" />
                    <div
                        className="bg-[#F7F5EF] flex size-12 items-center justify-center rounded-xl border-[1.5px] shadow-md lg:size-15"
                    >
                        {images[1] ? (
                            <img
                                src={images[1]}
                                alt=""
                                className="size-7 lg:size-8 object-contain"
                            />
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="relative flex w-full items-center justify-between px-[var(--middle-inset)] py-2.5 [--middle-inset:4.5rem]">
                <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-[var(--middle-inset)] -z-10 h-full w-[calc(100%-2*var(--middle-inset))] text-stone-500"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    fill="none"
                >
                    <path
                        d="M 0 50 H 100"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>
                <div
                    className="bg-[#F7F5EF] flex size-15 shrink-0 items-center justify-center rounded-xl border-[1.5px] shadow-xl md:size-18 lg:size-23"
                >
                    {images[2] ? (
                        <img
                            src={images[2]}
                            alt=""
                            className="size-8 md:size-10 lg:size-13 object-contain"
                        />
                    ) : null}
                </div>
                <div className="flex items-center justify-between md:w-full md:max-w-70 lg:max-w-100">
                    <div className="flex w-full max-w-20 justify-between max-md:hidden">
                        <span className="size-0.5" />
                        <span className="size-0.5" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="bg-[#F7F5EF] flex items-center justify-center rounded-xl border p-2">
                            <div
                                className="bg-secondary flex size-16 items-center justify-center rounded-xl border-[1.5px] shadow-xl md:size-23"
                            >
                                <div
                                    className="flex size-10 items-center justify-center rounded-xl md:size-24"
                                >
                                    {centerImage ? (
                                        <img
                                            src={centerImage}
                                            alt=""
                                            className="size-full rounded-xl object-contain"
                                        />
                                    ) : null}
                                </div>
                            </div>
                        </div>
                        <p className="font-semibold text-sm text-[#C0392B]">Favorite Tech Stack</p>
                    </div>
                    <div className="flex w-full max-w-20 justify-between max-md:hidden">
                        <span className="size-0.5" />
                        <span className="size-0.5" />
                    </div>
                </div>
                <div
                    className="bg-[#F7F5EF] flex size-15 shrink-0 items-center justify-center rounded-xl border-[1.5px] shadow-xl md:size-18 lg:size-23"
                >
                    {images[3] ? (
                        <img
                            src={images[3]}
                            alt=""
                            className="size-8 md:size-10 lg:size-13 object-contain"
                        />
                    ) : null}
                </div>
            </div>
            <div className="flex w-full max-w-4xl items-center justify-between max-md:hidden">
                <div className="flex items-center gap-30">
                    <div
                        className="bg-[#F7F5EF] flex size-12 items-center justify-center rounded-xl border-[1.5px] shadow-md lg:size-15"
                    >
                        {images[4] ? (
                            <img
                                src={images[4]}
                                alt=""
                                className="size-6 lg:size-8 object-contain"
                            />
                        ) : null}
                    </div>
                    <span className="size-0.5 max-md:hidden" />
                </div>
                <div className="flex items-center gap-30">
                    <span className="size-0.5 max-md:hidden" />
                    <div
                        className="bg-[#F7F5EF] flex size-12 items-center justify-center rounded-xl border-[1.5px] shadow-md lg:size-15"
                    >
                        {images[5] ? (
                            <img
                                src={images[5]}
                                alt=""
                                className="size-7 lg:size-11 object-contain"
                            />
                        ) : null}
                    </div>
                </div>
            </div>
            <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 h-full w-[calc(100%-3rem)] max-w-[53rem] -translate-x-1/2 text-stone-500 max-md:hidden lg:w-[calc(100%-60px)] lg:max-w-[calc(56rem-60px)]"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
            >
                <path
                    d="M 0 12 Q 22 12 50 50 Q 78 12 100 12 M 0 88 Q 22 88 50 50 Q 78 88 100 88"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    vectorEffect="non-scaling-stroke"
                />
            </svg>
        </div>
    );
};

export default Graph;
