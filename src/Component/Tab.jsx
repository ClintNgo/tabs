import React,{ useState }  from "react";

function Tabs() {
    const [selectTab, setselectTab] = useState(1);

    const select = (index) => {
        setselectTab(index);
    };

    return (
        <div className="container">
            <div className="bloc-tabs">
                <button
                    className={selectTab === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => select(1)}
                >
                    Tab 1
                </button>
                <button
                    className={selectTab === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => select(2)}
                >
                    Tab 2
                </button>
                <button
                    className={selectTab === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => select(3)}
                >
                    Tab 3
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={selectTab === 1 ? "content  active-content" : "content"}
                >
                    <h2>Tab 1</h2>
                    <hr />
                    <p>
                    Tab 1 content shown here!
                    </p>
                </div>

                <div
                    className={selectTab === 2 ? "content  active-content" : "content"}
                >
                    <h2>Tab 2</h2>
                    <hr />
                    <p>
                    Tab 2 content shown here!
                    </p>
                </div>

                <div
                    className={selectTab === 3 ? "content  active-content" : "content"}
                >
                    <h2>Tab 3</h2>
                    <hr />
                    <p>
                    Tab 3 content shown here!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tabs;