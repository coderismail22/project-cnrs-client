import AnimatedNumber from "react-animated-numbers";

const CounterForAboutPage = () => {
  const transitionTween = (index) => ({
    type: "tween",
    duration: index + 1,
    damping: 10,
    mass: 1,
  });

  const staff = 868;
  const offices = 78;
  const projects = 267;
  const workingDistricts = 19;

  return (
    <div className="mt-5 bg-[#FAFAFA]">
      {/* Stats */}
      <div className="flex items-center justify-center h-full font-yeseva">
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="mt-8 sm:mt-12">
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                {/* 1 */}
                <div className="flex flex-col rounded-lg bg-zinc-400 bg-opacity-20 px-4 py-8 text-center drop-shadow-lg">
                  {/* Icon */}
                  <div className="flex flex-col items-center justify-center mb-2">
                    <img src="/src/assets/about-icon-1.svg" alt="icon" />
                  </div>
                  <dt className="order-last text-2xl font-medium ">Staff</dt>

                  <div className="flex flex-col items-center text-6xl font-extrabold ">
                    <AnimatedNumber
                      transitions={() => transitionTween(1)}
                      includeComma
                      animateToNumber={staff}
                      locale="en-US"
                      configs={[
                        { mass: 1, tension: 220, friction: 100 },
                        { mass: 1, tension: 180, friction: 130 },
                        { mass: 1, tension: 280, friction: 90 },
                        { mass: 1, tension: 180, friction: 135 },
                        { mass: 1, tension: 260, friction: 100 },
                        { mass: 1, tension: 210, friction: 180 },
                      ]}
                    ></AnimatedNumber>
                  </div>
                </div>
                {/* 2 */}
                <div className="flex flex-col rounded-lg bg-zinc-400 bg-opacity-20 px-4 py-8 text-center drop-shadow-lg">
                  {/* Icon */}
                  <div className="flex flex-col items-center justify-center mb-2">
                    <img
                      className="w-[60px] h-[51px]"
                      src="/src/assets/about-icon-2.png"
                      alt="icon"
                    />
                  </div>
                  <dt className="order-last text-2xl font-medium ">
                    Offices across Bangladesh
                  </dt>
                  <div className="flex flex-col items-center text-6xl font-extrabold hover:text-[] ">
                    <AnimatedNumber
                      includeComma
                      animateToNumber={offices}
                      transitions={() => transitionTween(2)}
                      locale="en-US"
                      configs={[
                        { mass: 1, tension: 220, friction: 100 },
                        { mass: 1, tension: 180, friction: 130 },
                        { mass: 1, tension: 280, friction: 90 },
                        { mass: 1, tension: 180, friction: 135 },
                        { mass: 1, tension: 260, friction: 100 },
                        { mass: 1, tension: 210, friction: 180 },
                      ]}
                    ></AnimatedNumber>
                  </div>
                </div>
                {/* 3 */}
                <div className="flex flex-col rounded-lg bg-zinc-400 bg-opacity-20 px-4 py-8 text-center drop-shadow-lg">
                  {/* Icon */}
                  <div className="flex flex-col items-center justify-center mb-2">
                    <img src="/src/assets/about-icon-3.svg" alt="icon" />
                  </div>
                  <dt className="order-last text-2xl font-medium ">
                    Projects implemented till date
                  </dt>
                  <div className="flex flex-col items-center text-6xl font-extrabold ">
                    <AnimatedNumber
                      includeComma
                      animateToNumber={projects}
                      transitions={() => transitionTween(3)}
                      locale="en-US"
                      configs={[
                        { mass: 1, tension: 220, friction: 100 },
                        { mass: 1, tension: 180, friction: 130 },
                        { mass: 1, tension: 280, friction: 90 },
                      ]}
                    ></AnimatedNumber>
                  </div>
                </div>
                {/* 4 */}
                <div className="flex flex-col rounded-lg bg-zinc-400 bg-opacity-20 px-4 py-8 text-center drop-shadow-lg">
                  {/* Icon */}
                  <div className="flex flex-col items-center justify-center mb-2">
                    <img src="/src/assets/about-icon-4.svg" alt="icon" />
                  </div>
                  <dt className="order-last text-2xl font-medium ">
                    Present working districts of Bangladesh
                  </dt>
                  <div className="flex flex-col items-center text-6xl font-extrabold ">
                    <AnimatedNumber
                      includeComma
                      animateToNumber={workingDistricts}
                      transitions={() => transitionTween(4)}
                      locale="en-US"
                      configs={[
                        { mass: 1, tension: 220, friction: 100 },
                        { mass: 1, tension: 180, friction: 130 },
                        { mass: 1, tension: 280, friction: 90 },
                      ]}
                    ></AnimatedNumber>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CounterForAboutPage;
