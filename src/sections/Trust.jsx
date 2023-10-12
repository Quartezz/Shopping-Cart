const Trust = () => {
  return (
    <div className="flex px-10 bg-color-trust items-center justify-center bg-cover text-slate-100 py-14 mb-10">
      <div className="w-full flex justify-between max-w-[1200px]">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-cloud-arrow-up  text-4xl"></i>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold">Fast</span>
            <span className="desc-color">Instant download</span>
          </div>
        </div>
        <div className="w-[1px] h-16 spacer-color"></div>
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-shield-halved  text-4xl"></i>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold">Reliable & Safe</span>
            <span className="desc-color">More than 10,000 games!</span>
          </div>
        </div>
        <div className="w-[1px] h-16 spacer-color"></div>
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-shield-halved  text-4xl"></i>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold">Customer service</span>
            <span className="desc-color">Support 24/7</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
