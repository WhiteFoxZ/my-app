import React from 'react';

const Dflex = () => {
    return (
        <>
            <div className="right-content w-100">
                <h2>d-block</h2>
                <div className="d-block">
                    <div style={{ backgroundColor: 'lightcoral', padding: '20px', margin: '10px' }}>Item 1</div>
                    <div style={{ backgroundColor: 'lightblue', padding: '20px', margin: '10px' }}>Item 2</div>
                    <div style={{ backgroundColor: 'lightgreen', padding: '20px', margin: '10px' }}>Item 3</div>
                </div>

                <h2>d-flex</h2>
                <div className="d-flex">
                    <div style={{ backgroundColor: 'lightcoral', padding: '20px', margin: '10px' }}>Item 1</div>
                    <div style={{ backgroundColor: 'lightblue', padding: '20px', margin: '10px' }}>Item 2</div>
                    <div style={{ backgroundColor: 'lightgreen', padding: '20px', margin: '10px' }}>Item 3</div>
                </div>

                <h2>d-flex flex-row</h2>
                <div className="d-flex flex-row">
                    <div style={{ backgroundColor: 'lightcoral', padding: '20px', margin: '10px' }}>Item 1</div>
                    <div style={{ backgroundColor: 'lightblue', padding: '20px', margin: '10px' }}>Item 2</div>
                    <div style={{ backgroundColor: 'lightgreen', padding: '20px', margin: '10px' }}>Item 3</div>
                </div>

                <h2>d-flex flex-row-reverse</h2>
                <div className="d-flex flex-row-reverse">
                    <div style={{ backgroundColor: 'lightcoral', padding: '20px', margin: '10px' }}>Item 1</div>
                    <div style={{ backgroundColor: 'lightblue', padding: '20px', margin: '10px' }}>Item 2</div>
                    <div style={{ backgroundColor: 'lightgreen', padding: '20px', margin: '10px' }}>Item 3</div>
                </div>

                <h2>d-flex flex-column</h2>
                <div className="d-flex flex-column">
                    <div style={{ backgroundColor: 'lightcoral', padding: '20px', margin: '10px' }}>Item 1</div>
                    <div style={{ backgroundColor: 'lightblue', padding: '20px', margin: '10px' }}>Item 2</div>
                    <div style={{ backgroundColor: 'lightgreen', padding: '20px', margin: '10px' }}>Item 3</div>
                </div>

                <h2>d-flex flex-column-reverse</h2>
                <div className="d-flex flex-column-reverse">
                    <div style={{ backgroundColor: 'lightcoral', padding: '20px', margin: '10px' }}>Item 1</div>
                    <div style={{ backgroundColor: 'lightblue', padding: '20px', margin: '10px' }}>Item 2</div>
                    <div style={{ backgroundColor: 'lightgreen', padding: '20px', margin: '10px' }}>Item 3</div>
                </div>

                <h2>d-flex flex-wrap : Item 크기가 컨테이너를 넘으면 자동으로 넘어감</h2>
                <div className="d-flex flex-wrap">
                    <div style={{ backgroundColor: 'lightcoral', padding: '20px', margin: '10px', width: '30%' }}>Item 1</div>
                    <div style={{ backgroundColor: 'lightblue', padding: '20px', margin: '10px', width: '50%' }}>Item 2</div>
                    <div style={{ backgroundColor: 'lightgreen', padding: '20px', margin: '10px', width: '30%' }}>Item 3</div>
                </div>

                <h2>d-flex flex-nowrap : Item크기를 컨테이너 크기에 자동맞춤</h2>
                <div className="d-flex flex-nowrap">
                    <div style={{ backgroundColor: 'lightcoral', padding: '20px', margin: '10px', width: '30%' }}>Item 1</div>
                    <div style={{ backgroundColor: 'lightblue', padding: '20px', margin: '10px', width: '30%' }}>Item 2</div>
                    <div style={{ backgroundColor: 'lightgreen', padding: '20px', margin: '10px', width: '100%' }}>Item 3</div>
                </div>

                <h2>d-flex justify-content-start</h2>
                <div className="d-flex justify-content-start">
                    <div style={{ backgroundColor: 'lightcoral', padding: '20px', margin: '10px', width: '20%' }}>Item 1</div>
                    <div style={{ backgroundColor: 'lightblue', padding: '20px', margin: '10px', width: '20%' }}>Item 2</div>
                    <div style={{ backgroundColor: 'lightgreen', padding: '20px', margin: '10px', width: '20%' }}>Item 3</div>
                </div>

                <h2>d-flex justify-content-end</h2>
                <div className="d-flex justify-content-end">
                    <div style={{ backgroundColor: 'lightcoral', padding: '20px', margin: '10px' }}>Item 1</div>
                    <div style={{ backgroundColor: 'lightblue', padding: '20px', margin: '10px' }}>Item 2</div>
                    <div style={{ backgroundColor: 'lightgreen', padding: '20px', margin: '10px' }}>Item 3</div>
                </div>

                <h2>d-flex justify-content-center</h2>
                <div className="d-flex justify-content-center">
                    <div style={{ backgroundColor: 'lightcoral', padding: '20px', margin: '10px' }}>Item 1</div>
                    <div style={{ backgroundColor: 'lightblue', padding: '20px', margin: '10px' }}>Item 2</div>
                    <div style={{ backgroundColor: 'lightgreen', padding: '20px', margin: '10px' }}>Item 3</div>
                </div>

                <h2>d-flex justify-space-between : 아이템들의 “사이(between)”에 균일한 간격을 만들어 줍니다.</h2>
                <div className="d-flex justify-space-between">
                    <div style={{ backgroundColor: 'lightcoral', padding: '20px', margin: '10px' }}>Item 1</div>
                    <div style={{ backgroundColor: 'lightblue', padding: '20px', margin: '10px' }}>Item 2</div>
                    <div style={{ backgroundColor: 'lightgreen', padding: '20px', margin: '10px' }}>Item 3</div>
                </div>

                <h2>d-flex justify-space-around:아이템들의 “둘레(around)”에 균일한 간격을 만들어 줍니다.</h2>
                <div className="d-flex justify-space-around">
                    <div style={{ backgroundColor: 'lightcoral', padding: '20px', margin: '10px' }}>Item 1</div>
                    <div style={{ backgroundColor: 'lightblue', padding: '20px', margin: '10px' }}>Item 2</div>
                    <div style={{ backgroundColor: 'lightgreen', padding: '20px', margin: '10px' }}>Item 3</div>
                </div>
            </div>
        </>
    );
};

export default Dflex;
