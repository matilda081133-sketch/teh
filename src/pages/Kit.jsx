import FrameComponent11111 from "../components/FrameComponent11111";
import GroupComponent from "../components/GroupComponent";
import "./Kit.css";
import { useEffect } from "react";

const Kit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="div">
      <main className="frame-parent">
        <img className="frame-child" alt="" src="./Group-146.svg" />
        <img className="k1t" src="./heading-audience.png" alt="Для кого мы создавали K1t" />
        <img className="hd-camera-2-1-1" loading="lazy" alt="" src="./kit-product.png" />
        <div className="vector-parent">
          <img className="vector-icon" alt="" src="./Vector.svg" />
          <img className="hd-camera-2-1-2" loading="lazy" alt="" src="./kit-hero.png" />
        </div>
      </main>

      <main className="frame-group">
        {/* Header */}
        <section className="frame-wrapper">
          <div className="frame-container">
            <FrameComponent11111 />
            <img className="div4" src="./heading-hero.png" alt="Собрал / Испытал / Играй /" />
          </div>
        </section>

        {/* Subtitle section */}
        <section className="frame-section">
          <div className="parent">
            <h3 className="h3">Инженерия без компромиссов</h3>
            <div className="wrapper">
              <div className="div5">
                Когда игрушка перестает быть просто моделью на полке, а становится настоящим механизмом.&nbsp;
              </div>
            </div>

            {/* Big text + Cards */}
            <section className="frame-wrapper4">
              <div className="frame-parent5">
                <div className="container">
                  <b className="b">инженерные наборы для тех, кто готов выйти за рамки обычной детской игрушки</b>
                </div>
                <div className="k1t2">
                  В основе K1T лежат материалы индустриального класса и физика реального мира.&nbsp;
                </div>
              </div>
            </section>

            <div className="cards-parent">
              <div className="cards">
                {/* Card 01 */}
                <section className="card">
                  <div className="frame">
                    <h2 className="h2">01</h2>
                  </div>
                  <div className="bottom">
                    <h3 className="h32">Качество материалов</h3>
                    <div className="div6">
                      Первый конструктор со стальными подшипниками качения. Забудьте о трении «пластик по пластику» - модели обладают идеальной плавностью хода.
                    </div>
                  </div>
                </section>

                {/* Card 02 */}
                <section className="card">
                  <h2 className="h2">02</h2>
                  <div className="bottom2">
                    <h3 className="h32">Прочность конструкций</h3>
                    <div className="div6">
                      Все силовые соединения и оси выполнены из высококлассной нержавеющей стали. Конструкции не боятся нагрузок и активной игры.&nbsp;
                    </div>
                  </div>
                </section>

                {/* Card 03 */}
                <section className="card">
                  <h2 className="h2">03</h2>
                  <div className="bottom3">
                    <h3 className="h32">Инновационность</h3>
                    <div className="div6">
                      Наша запатентованная система фиксации деталей гарантирует, что модель не рассыпится в самый ответственный момент.&nbsp;
                    </div>
                  </div>
                </section>
              </div>

              {/* Innovation section */}
              <div className="frame-parent6">
                <section className="frame-wrapper5">
                  <div className="frame-parent7">
                    <div className="k1t-wrapper">
                      <h3 className="k1t3">
                        Инновационное<br />«сердце»<br />K1T:
                      </h3>
                    </div>
                    <b className="b2">объединили сверхпрочные материалы с инновационной электроникой, чтобы вы могли создавать устройства, готовые к реальным испытаниям в полевых условиях.</b>
                  </div>
                </section>

                {/* Tech specs grid */}
                <div className="frame-parent8">
                  {/* Row 1: 01, 02, 03 */}
                  <section className="frame-parent9">
                    <div className="frame-parent10">
                      <div className="frame-wrapper6">
                        <div className="group">
                          <div className="div9">
                            <div className="text-wrapper">
                              <div className="text">01</div>
                            </div>
                          </div>
                          <div className="parent2">
                            <h3 className="mesh-">Грузовые коптеры</h3>
                            <div className="div6">
                              Мощная рама из поликетона позволяет дрону не просто летать, а уверенно транспортировать реальные грузы на расстояние до 12 километров.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-child2"></div>
                    </div>
                    <div className="line-wrapper">
                      <div className="frame-child3"></div>
                    </div>
                    <div className="frame-parent10">
                      <div className="parent3">
                        <div className="div9">
                          <div className="text-wrapper">
                            <div className="text">02</div>
                          </div>
                        </div>
                        <div className="parent2">
                          <h3 className="mesh-">Колесные базы</h3>
                          <div className="div6">
                            Стальные подшипники сводят трение к минимуму, позволяя силовым электрическим моторам передавать максимум крутящего момента на колеса без потери энергии.
                          </div>
                        </div>
                      </div>
                      <div className="frame-child4"></div>
                    </div>
                    <div className="line-wrapper">
                      <div className="frame-child3"></div>
                    </div>
                  </section>

                  {/* Row 2 right side: 03, 04 */}
                  <section className="frame-wrapper7">
                    <div className="frame-parent12">
                      <div className="line-frame">
                        <div className="frame-child3"></div>
                      </div>
                      <div className="frame-parent13">
                        <div className="parent5">
                          <div className="div9">
                            <div className="text-wrapper">
                              <div className="text">03</div>
                            </div>
                          </div>
                          <div className="parent2">
                            <h3 className="mesh-">Манипуляторы</h3>
                            <div className="div6">
                              Механизмы K1T способны копать, грузить и перемещать тяжелые объекты, выдерживая нагрузки, которые разрушили бы обычный пластик.
                            </div>
                          </div>
                        </div>
                        <div className="frame-child4"></div>
                      </div>
                      <div className="line-frame">
                        <div className="frame-child3"></div>
                      </div>
                      <div className="frame-parent14">
                        <div className="parent3">
                          <button className="button">
                            <div className="text-wrapper">
                              <div className="text4">04</div>
                            </div>
                          </button>
                          <div className="mesh-parent">
                            <h3 className="mesh-">Mesh-сетевая связь</h3>
                            <div className="div6">
                              Электронные блоки поддерживают создание децентрализованных сетей для группы роботов. Способны организовывать "рой" и выполнять сложные задания, координируя действия между друг другом.
                            </div>
                          </div>
                        </div>
                        <div className="frame-child4"></div>
                      </div>
                      <div className="frame-child10"></div>
                    </div>
                  </section>

                  {/* Row 3: 05, 06 */}
                  <section className="frame-wrapper8">
                    <div className="frame-parent15">
                      <div className="frame-parent16">
                        <div className="parent8">
                          <div className="div9">
                            <div className="text-wrapper">
                              <div className="text">05</div>
                            </div>
                          </div>
                          <div className="parent2">
                            <b className="b3">Видеопередача в реальном времени</b>
                            <div className="div6">
                              Получайте четкую картинку и управляйте своей техникой «от первого лица», где бы вы ни находились
                            </div>
                          </div>
                        </div>
                        <div className="frame-child4"></div>
                      </div>
                      <div className="line-wrapper">
                        <div className="frame-child3"></div>
                      </div>
                      <div className="frame-parent16">
                        <div className="parent5">
                          <div className="div9">
                            <div className="text-wrapper">
                              <div className="text">06</div>
                            </div>
                          </div>
                          <div className="parent2">
                            <h3 className="mesh-">Автономная навигация</h3>
                            <div className="div6">
                              Благодаря алгоритмам машинного зрения, колесные базы, манипуляторы и квадрокоптеры способны самостоятельно строить маршруты, обходить препятствия и выполнять задачи в сложных пространствах без участия оператора.
                            </div>
                          </div>
                        </div>
                        <div className="frame-child4"></div>
                      </div>
                      <div className="line-wrapper">
                        <div className="frame-child3"></div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audience section */}
        <section className="frame-wrapper9">
          <div className="frame-parent18">
            <section className="parent12">
              <img className="h1" src="./heading-young.png" alt="Юным инженерам" />
              <div className="k1t-parent">
                <div className="k1t5">
                  Даже не прикасайтесь к привычным конструкторам. K1T даст всё - от обычных моделей без электроники и до сборки своего первого реально работающего беспилотника с искусственным интеллектом и машинным зрением.
                </div>
                <img className="group-icon" loading="lazy" alt="" src="./Group-355.svg" />
              </div>
            </section>

            <section className="frame-wrapper10">
              <div className="b2b-parent">
                <img className="b2b" src="./heading-b2b.png" alt="B2B и образовательным центрам" />
                <div className="k1t-parent">
                  <div className="k1t5">
                    Готовое решение для кружков робототехники, где важна надежность и наглядность физических процессов.
                  </div>
                  <div className="group-icon">
                    <div className="rectangle-div"></div>
                    <div className="frame-child15"></div>
                    <div className="frame-child16"></div>
                    <div className="ellipse-div"></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="frame-wrapper11">
              <div className="parent14">
                <img className="h12" src="./heading-makers.png" alt="Мейкерам и изобретателям" />
                <div className="k1t-parent">
                  <div className="k1t5">
                    K1T предоставляет идеальную платформу с открытой архитектурой для реализации самых смелых DIY-проектов.
                  </div>
                  <img className="group-icon" alt="" src="./Vector1.svg" />
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Footer */}
        <GroupComponent />
      </main>

      <img className="camera-1-1-1" alt="" src="./Camera-1-1-1@2x.png" />
    </div>
  );
};

export default Kit;
