import majorlogo from './img/majorlogo.png';
import quarter1 from './img/quarter1.png';
import quarter2 from './img/quarter2.png';
import quarter3 from './img/quarter3.png';
import quarter4 from './img/quarter4.png';
import receiptImg from './img/receipt.png';
import EditProfile from './EditProfile';
import './css/EditMainPage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function MainPage(props) {
    let debugAPIURL = "";
    // debugAPIURL = "https://cors-jhs.herokuapp.com/https://pkscl.kro.kr";

    const history = useHistory();

    let tempQuarter;

    let answer = {
        "studentPresident": {
            "major": "국어국문학과",
            "name": "홍길동",
            "phoneNumber": "01012345678",
            "email": "PKSCL@pukyon.ac.kr"
        },
        "quarter": {
            "quarter1": {
                "status": "true",
                "eventList": [
                    {
                        "eventNumber": "1",
                        "eventTitle": "공개일 O",
                        "eventContext": "데이타 O",
                        "receiptList": [

                        ]
                    },
                    {
                        "eventNumber": "2",
                        "eventTitle": "학과 OT",
                        "eventContext": "학과 OT를 진행하였습니다.",
                        "receiptList": [
                            {
                                "receiptTitle": "학과 OT 영수증1",
                                "receiptImg": "./static/receiptImg/test2.png",
                                "receiptContext": "학과 OT 영수증입니다.",
                                "receiptDetailList": [
                                    {
                                        "context": "돈까스",
                                        "price": "2000",
                                        "amount": "1"
                                    },
                                    {
                                        "context": "대선",
                                        "price": "3000",
                                        "amount": "2"
                                    },
                                    {
                                        "context": "참이슬",
                                        "price": "1000",
                                        "amount": "1"
                                    },
                                    {
                                        "context": "초콜렛",
                                        "price": "1000",
                                        "amount": "5"
                                    }
                                ]
                            },
                            {
                                "receiptTitle": "학과 OT 영수증2",
                                "receiptImg": "./static/receiptImg/test2.png",
                                "receiptContext": "학과 OT 영수증입니다.",
                                "receiptDetailList": [
                                    {
                                        "context": "갈비",
                                        "price": "2000",
                                        "amount": "2"
                                    },
                                    {
                                        "context": "과자",
                                        "price": "3000",
                                        "amount": "1"
                                    },
                                    {
                                        "context": "지우개",
                                        "price": "1000",
                                        "amount": "3"
                                    },
                                    {
                                        "context": "연필",
                                        "price": "1000",
                                        "amount": "5"
                                    }
                                ]
                            },
                            {
                                "receiptTitle": "학과 OT 영수증3",
                                "receiptImg": "./static/receiptImg/test2.png",
                                "receiptContext": "학과 OT 영수증입니다.",
                                "receiptDetailList": [
                                    {
                                        "context": "컵",
                                        "price": "2000",
                                        "amount": "1"
                                    },
                                    {
                                        "context": "휴지",
                                        "price": "5000",
                                        "amount": "2"
                                    },
                                    {
                                        "context": "책",
                                        "price": "6000",
                                        "amount": "2"
                                    },
                                    {
                                        "context": "바구니",
                                        "price": "7000",
                                        "amount": "3"
                                    },
                                    {
                                        "context": "이어폰",
                                        "price": "8000",
                                        "amount": "4"
                                    },
                                    {
                                        "context": "콜라",
                                        "price": "5000",
                                        "amount": "5"
                                    },
                                    {
                                        "context": "물",
                                        "price": "4000",
                                        "amount": "7"
                                    },
                                    {
                                        "context": "프라이팬",
                                        "price": "3000",
                                        "amount": "6"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "eventNumber": "3",
                        "eventTitle": "학과 OT2",
                        "eventContext": "학과 OT2를 진행하였습니다.",
                        "receiptList": [
                            {
                                "receiptTitle": "학과 OT2 영수증1",
                                "receiptImg": "./static/receiptImg/test2.png",
                                "receiptContext": "학과 OT2 영수증입니다.",
                                "receiptDetailList": [
                                    {
                                        "context": "돈까스",
                                        "price": "3000",
                                        "amount": "1"
                                    },
                                    {
                                        "context": "대선",
                                        "price": "2000",
                                        "amount": "2"
                                    },
                                    {
                                        "context": "갈비",
                                        "price": "4000",
                                        "amount": "5"
                                    },
                                    {
                                        "context": "참이슬",
                                        "price": "5000",
                                        "amount": "6"
                                    },
                                    {
                                        "context": "초콜렛",
                                        "price": "1000",
                                        "amount": "7"
                                    },
                                    {
                                        "context": "지우개",
                                        "price": "2000",
                                        "amount": "8"
                                    },
                                    {
                                        "context": "연필",
                                        "price": "3000",
                                        "amount": "9"
                                    }
                                ]
                            },
                            {
                                "receiptTitle": "학과 OT2 영수증2",
                                "receiptImg": "./static/receiptImg/test2.png",
                                "receiptContext": "학과 OT2 영수증입니다.",
                                "receiptDetailList": [
                                    {
                                        "context": "갈비",
                                        "price": "4000",
                                        "amount": "1"
                                    },
                                    {
                                        "context": "돈까스",
                                        "price": "5000",
                                        "amount": "2"
                                    },
                                    {
                                        "context": "휴지",
                                        "price": "2000",
                                        "amount": "3"
                                    },
                                    {
                                        "context": "컵",
                                        "price": "4000",
                                        "amount": "2"
                                    },
                                    {
                                        "context": "콜라",
                                        "price": "1000",
                                        "amount": "1"
                                    },
                                    {
                                        "context": "바구니",
                                        "price": "1000",
                                        "amount": "2"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "eventNumber": "4",
                        "eventTitle": "새내기배움터",
                        "eventContext": "새내기배움터를 진행하였습니다.",
                        "receiptList": [
                            {
                                "receiptTitle": "새내기배움터 영수증 1",
                                "receiptImg": "./static/receiptImg/test2.png",
                                "receiptContext": "새내기배움터 OT 영수증입니다.",
                                "receiptDetailList": [
                                    {
                                        "context": "이어폰",
                                        "price": "5000",
                                        "amount": "1"
                                    },
                                    {
                                        "context": "콜라",
                                        "price": "4000",
                                        "amount": "2"
                                    },
                                    {
                                        "context": "물",
                                        "price": "3000",
                                        "amount": "1"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "eventNumber": "5",
                        "eventTitle": "벚꽃축제1",
                        "eventContext": "벚꽃축제1를 진행하였습니다.",
                        "receiptList": [

                        ]
                    }
                ]
            },
            "quarter2": {
                "status": "true",
                "eventList": [
                    {
                        "eventNumber": "6",
                        "eventTitle": "공개일 O",
                        "eventContext": "데이타 O",
                        "receiptList": [

                        ]
                    },
                    {
                        "eventNumber": "7",
                        "eventTitle": "우리학과 OT",
                        "eventContext": "OT를 완료하였습니다.",
                        "receiptList": [

                        ]
                    },
                    {
                        "eventNumber": "8",
                        "eventTitle": "MT 영수증",
                        "eventContext": "MT를 진행하였습니다. 큰 사건사고 없이 잘 마무리하였습니다 !",
                        "receiptList": [

                        ]
                    },
                    {
                        "eventNumber": "9",
                        "eventTitle": "MT 영수증2",
                        "eventContext": "MT를 진행하였습니다. 큰 사건사고 없이 잘 마무리하였습니다 !",
                        "receiptList": [

                        ]
                    }
                ]
            },
            "quarter3": {
                "status": "true"
            },
            "quarter4": {
                "status": "false"
            }
        }
    }

    let answerDate = {
        "quarter1": ["2022-01-01", "2022-01-02"],
        "quarter2": ["2022-01-03", "2022-01-04"],
        "quarter3": ["2022-01-05", "2022-01-06"],
        "quarter4": ["2022-01-07", "2022-01-08"]
    }

    const [studentPresident, setStudentPresident] = useState();

    const [quarter, setQuarter] = useState();
    const [quarterDate, setQuarterDate] = useState();

    const [eventAmount, setEventAmount] = useState([]);
    const [quarterAmount, setQuarterAmount] = useState(0);
    const [currentQuarter, setCurrentQuarter] = useState(props.todayQuarter);
    const [showAllReceiptButton, setShowAllReceiptButton] = useState([]);
    const [editProfileState, setEditProfileState] = useState(false);

    const [major, setMajor] = useState();
    const [majorList, setMajorList] = useState();

    const [fixEventButton, setFixEventButton] = useState([]);

    function resetShowAllReceiptButton() {
        let resetArray = [];
        if (quarter[currentQuarter]["eventList"] !== undefined) {

            for (let i = 0; i < quarter[currentQuarter]["eventList"].length; i++) {
                resetArray.push(true)
            }
        }

        setShowAllReceiptButton(resetArray)
    }

    function reset(quarterData) {
        if (quarter !== undefined) {
            CalculateCurrentQuarterReceiptSumList(quarter[quarterData]["eventList"]);
            resetShowAllReceiptButton();
        }
        window.scrollTo(0, 0);
    }

    function showQuarter(selectedQuarter) {
        if (props.loginPosition === "student") {
            if (quarter[selectedQuarter]["status"] === "true") {
                setCurrentQuarter(selectedQuarter);
                defineColor(selectedQuarter);
            } else {
                alert("현재 공개된 장부가 아닙니다 :)")
            }
        } else {
            setCurrentQuarter(selectedQuarter);
            defineColor(selectedQuarter);
        }
    }

    function pksclSubmitButton() {
        alert("API..")
    }

    function sumItems(price, amount) {
        return price * amount;
    }

    function sumReceipt(receiptDetailList) {
        let sumReceiptValue = 0;
        if (receiptDetailList !== undefined) {
            for (let i = 0; i < receiptDetailList.length; i++) {
                let item = receiptDetailList[i];
                sumReceiptValue = sumReceiptValue + sumItems(item["price"], item["amount"]);
            }
        }
        return sumReceiptValue;
    }

    function sumEvent(receiptList) {
        let sumEventValue = 0;
        for (let i = 0; i < receiptList.length; i++) {
            let receipt = receiptList[i]["receiptDetailList"];
            sumEventValue = sumEventValue + sumReceipt(receipt);
        }
        return sumEventValue
    }

    function CalculateCurrentQuarterReceiptSumList(eventList) {
        if (eventList === undefined) {
            setQuarterAmount(0);
        } else {
            let eventSum = [];
            for (let i = 0; i < eventList.length; i++) {
                eventSum.push(sumEvent(eventList[i]["receiptList"]));
            }
            setEventAmount([...eventSum]);

            let quarterSum = 0;
            for (let i = 0; i < eventSum.length; i++) {
                quarterSum = quarterSum + eventSum[i];
            }
            setQuarterAmount(quarterSum);
        }
    }

    function setColorProperty(colorQuarter, colorQuarterCircle, colorLeftPanel, colorCard) {
        document.documentElement.style.setProperty("--color-quarter", colorQuarter);
        document.documentElement.style.setProperty("--color-quarterCircle", colorQuarterCircle);
        document.documentElement.style.setProperty("--color-leftPanel", colorLeftPanel);
        document.documentElement.style.setProperty("--color-card", colorCard);
    }

    function defineColor(quarter) {
        if (quarter === "quarter1") {
            setColorProperty("#db8f8e", "#efbebc", "#f5dede", "#fff5ed");
        } else if (quarter === "quarter2") {
            setColorProperty("#649d67", "#cedbcf", "#cedbcf", "#dee7df");
        } else if (quarter === "quarter3") {
            setColorProperty("#c18356", "#efdccd", "#e9d8cd", "#fff5ed");
        } else if (quarter === "quarter4") {
            setColorProperty("#6b8396", "#d0dbe5", "#d0dbe5", "#e6f1fb");
        }
    }

    function logout() {
        axios.post('/logout')
            .then((payload) => {
                history.push('/');
            }).catch((error) => {
                console.log("error: " + error.response.status);
            })
    }

    function GetDate() {
        axios.get("/ledger-date")
            .then((payload) => {
                setQuarterDate({ ...payload.data });
            })
            .catch((error) => {
                alert("분기별 장부 open, close 날짜를 불러올 수 없습니다.");
                //지우기
                setQuarterDate({ ...answerDate });
            })
    }

    function eventDelectButton(eventNumber) {
        let answer = window.confirm("삭제하면 되돌릴 수 없습니다.");
        if (answer) {
            alert("삭제 API추가해야함" + eventNumber);
            const payload = { "eventNumber": eventNumber };

            axios.delete(debugAPIURL + '/ledger', payload)
                .then((payload) => {
                    switch (payload.status) {
                        case 200:
                            alert("행사 장부가 삭제되었습니다.");
                            break;
                    }
                })
        } else {
            alert("삭제가 취소되었습니다.")
        }
    }

    function eventFixButton() {

        alert("수정 API추가해야함")
    }

    function eventAddButton(currentQuarter) {
        console.log(quarter);
        console.log(currentQuarter);
        const temp = { ...quarter };
        temp[currentQuarter]["eventList"].push({
            eventContext: "행사내용",
            eventNumber: "eventNumber",
            eventTitle: "행사 이름",
            receiptList: [
                {
                    "receiptTitle": "영수증 제목",
                    "receiptImg": "이미지 경로",
                    "receiptContext": "영수증 내용",
                    "receiptDetailList": [
                        {
                            "context": "항목 이름",
                            "price": "0000",
                            "amount": "9999"
                        },
                    ]
                },
            ],
        });

        setQuarter(temp);
    }

    function changeItem(key, value, i, j, k) {
        console.log(tempQuarter);
        tempQuarter[currentQuarter]["eventList"][i]["receiptList"][j]["receiptDetailList"][k][key] = value;

    }

    useEffect(() => {
        axios.get('/ledger')
            .then((payload) => {
                setStudentPresident({ ...payload.data["studentPresident"] });
                setQuarter({ ...payload.data["quarter"] });
                reset(props.todayQuarter);
                GetDate();
                defineColor(props.todayQuarter);
            })
            .catch((error) => {
                alert("학과 장부를 불러올 수 없습니다.");
                //지우기
                console.log(answer)
                setStudentPresident({ ...answer["studentPresident"] });
                setQuarter({ ...answer["quarter"] });
                reset(props.todayQuarter);
                GetDate();
                defineColor(props.todayQuarter);
            })
    }, []);


    useEffect(() => {
        if (quarter !== undefined) {
            reset(currentQuarter);
        }

    }, [currentQuarter])

    useEffect(() => {
        if (quarter !== undefined)
            reset(props.todayQuarter);
    }, [quarter])



    return (
        <div className="EditMainPageContainer">
            {
                props.loginPosition !== "president"
                    ? <div>잘못된 접근입니다.</div>
                    : (<>{
                        editProfileState
                            ?
                            // <EditProfile loginPosition={props.loginPosition} setEditProfileState={setEditProfileState}></EditProfile>
                            <EditProfile editProfileState={editProfileState} loginPosition={"president"} setEditProfileState={setEditProfileState}></EditProfile>
                            : null
                    }
                        {
                            quarter === undefined
                                ? null
                                : (<>
                                    <div className="leftPanel" id='leftPanel'>
                                        <div className="quarter">
                                            <div className="quarterButton" onClick={() => { showQuarter("quarter1") }}><div>1분기</div><img src={quarter1} alt="quarter1" ></img></div>
                                            <div className="quarterButton" onClick={() => { showQuarter("quarter2") }}><div>2분기</div><img src={quarter2} alt="quarter2" ></img></div>
                                            <div className="quarterButton" onClick={() => { showQuarter("quarter3") }}><div>3분기</div><img src={quarter3} alt="quarter3" ></img></div>
                                            <div className="quarterButton" onClick={() => { showQuarter("quarter4") }}><div>4분기</div><img src={quarter4} alt="quarter4" ></img></div>
                                        </div>
                                        {
                                            props.loginPosition === "student"
                                                ? null
                                                : (<div className="managementPageBar">
                                                    <i className="fas fa-chevron-right" onClick={() => { defineColor(props.todayQuarter); history.push('/manage') }}></i>
                                                </div>)
                                        }
                                    </div>
                                    {/* rightPanel */}
                                    <div className="rightPanel">
                                        <div className="nav">
                                            <div className="buttons">
                                                {
                                                    console.log(quarterDate)
                                                }
                                                {
                                                    quarterDate !== undefined
                                                        ? (
                                                            <>{currentQuarter[currentQuarter.length - 1]}분기 장부 공개일 : <input className="dateInput" type={"date"} value={quarterDate[currentQuarter][0]}
                                                                onChange={(e) => {
                                                                    let tempDateArray = { ...quarterDate }
                                                                    tempDateArray[currentQuarter][0] = e.target.value;
                                                                    setQuarterDate(tempDateArray)
                                                                }}
                                                            ></input>~
                                                                <input className="dateInput" type={"date"} value={quarterDate[currentQuarter][1]}
                                                                    style={{ marginLeft: "10px" }}
                                                                    onChange={(e) => {
                                                                        let tempDateArray = { ...quarterDate }
                                                                        tempDateArray[currentQuarter][1] = e.target.value;
                                                                        setQuarterDate(tempDateArray)
                                                                    }}
                                                                ></input></>
                                                        )
                                                        : null
                                                }
                                                <button className='submitButton' type='button' onClick={() => { history.push('/main') }}>학생 입장 장부 확인</button>
                                                <button className='submitButton' type='button' onClick={() => { setEditProfileState(true); }}>프로필 편집</button>
                                                <button className='submitButton' type='button' onClick={() => { logout(); }}>로그아웃</button>
                                            </div>
                                        </div>

                                        {/* 장부 */}
                                        <div style={{ display: "flex" }}>
                                            <div className="quarterData">
                                                <h2 className="quarterTotalAmount">
                                                    {currentQuarter[currentQuarter.length - 1]}분기 총 금액 : {quarterAmount}원
                                                </h2>
                                                {
                                                    quarter[currentQuarter]["eventList"] === undefined
                                                        ? <div>입력된 행사가 없습니다.</div>
                                                        : (quarter[currentQuarter]["eventList"].map((event, i) => {
                                                            return (
                                                                <div className="eventCard" >
                                                                    <div className="cardContent">
                                                                        <div className="eventSource">
                                                                            <div><div className="eventTitle"><h4 >{event["eventTitle"]}</h4>  <div>행사 총 금액 : {eventAmount[i]}원</div></div>
                                                                                <div>{event["eventContext"]}  </div></div>
                                                                            <div className="eventButtons">
                                                                                <button onClick={() => { eventDelectButton(event["eventNumber"]); }} style={{ marginRight: "15px" }}> 행사 삭제 </button>
                                                                                {
                                                                                    fixEventButton[i] === true
                                                                                        ? <button onClick={() => {
                                                                                            let array = [...fixEventButton];
                                                                                            array[i] = !fixEventButton[i];
                                                                                            eventFixButton(); setFixEventButton(array)
                                                                                        }} style={{ marginRight: "15px" }}> 행사 수정 완료 </button>
                                                                                        : <button onClick={() => {
                                                                                            let array = [...fixEventButton];
                                                                                            array[i] = !fixEventButton[i];
                                                                                            setFixEventButton(array);
                                                                                            tempQuarter = quarter;
                                                                                            console.log(quarter);

                                                                                        }} style={{ marginRight: "15px" }}> 행사 수정 </button>
                                                                                }
                                                                                {
                                                                                    event.receiptList.length <= 1
                                                                                        ? null
                                                                                        : (
                                                                                            showAllReceiptButton[i] === false
                                                                                                ? (
                                                                                                    <button onClick={() => {
                                                                                                        let array = [...showAllReceiptButton];
                                                                                                        array[i] = !showAllReceiptButton[i];
                                                                                                        setShowAllReceiptButton(array);
                                                                                                    }}>전체보기 취소</button>
                                                                                                )
                                                                                                : (
                                                                                                    <button onClick={() => {
                                                                                                        let array = [...showAllReceiptButton];
                                                                                                        array[i] = !showAllReceiptButton[i];
                                                                                                        setShowAllReceiptButton(array);
                                                                                                    }}>전체보기</button>
                                                                                                )
                                                                                        )

                                                                                }
                                                                            </div>
                                                                        </div>

                                                                        {
                                                                            showAllReceiptButton[i] === true
                                                                                ? (<div id="receiptContent" style={{ height: "380px", overflowY: "hidden" }}>

                                                                                    <div className="receiptCard">
                                                                                        <div className="receiptResource">
                                                                                            {
                                                                                                event["receiptList"].length === 0
                                                                                                    ? <div>입력된 영수증이 없습니다.</div>
                                                                                                    : (<>
                                                                                                        <div className="receiptTitle"><h5>{event["receiptList"][0]["receiptTitle"]}</h5>
                                                                                                            {
                                                                                                                event["receiptList"][0]["receiptDetailList"].length === 0
                                                                                                                    ? null
                                                                                                                    : (<div>1번째 영수증 금액 : {sumReceipt(event["receiptList"][0]["receiptDetailList"])}원</div>)
                                                                                                            }
                                                                                                        </div>

                                                                                                        <div>{event["receiptList"][0]["receiptContext"]}</div>



                                                                                                        {
                                                                                                            event["receiptList"][0]["receiptDetailList"].length === 0
                                                                                                                ? <div className="noneContext"> 입력된 영수증 내역이 없습니다.</div>
                                                                                                                : (<><table className="receiptTable"><thead>
                                                                                                                    <tr>
                                                                                                                        <th>품명</th>
                                                                                                                        <th>단가</th>
                                                                                                                        <th>수량</th>
                                                                                                                        <th>가격</th>
                                                                                                                    </tr>
                                                                                                                </thead>
                                                                                                                    <tbody>{event["receiptList"][0]["receiptDetailList"].map((item, k) => {
                                                                                                                        return (<tr>
                                                                                                                            <td contentEditable={fixEventButton[i]}>{item["context"]}</td>
                                                                                                                            <td contentEditable={fixEventButton[i]}>{item["price"]}</td>
                                                                                                                            <td contentEditable={fixEventButton[i]}>{item["amount"]}</td>
                                                                                                                            <td>{sumItems(item["price"], item["amount"])}</td>
                                                                                                                        </tr>)
                                                                                                                    })}
                                                                                                                    </tbody> </table></>)
                                                                                                        }
                                                                                                    </>
                                                                                                    )
                                                                                            }

                                                                                        </div>
                                                                                        {
                                                                                            event["receiptList"].length === 0
                                                                                                ? null
                                                                                                :
                                                                                                <img src={event["receiptList"][0]["receiptImg"]} style={{ backgroundColor: "var(--color-leftPanel)" }} alt={event["receiptList"][0]["receiptImg"]} height={"150"} width={"100"} />
                                                                                        }

                                                                                    </div>

                                                                                </div>)
                                                                                : (<div id="receiptContent" >
                                                                                    {
                                                                                        event["receiptList"].map((receipt, j) => {
                                                                                            return (
                                                                                                <div className="receiptCard">
                                                                                                    <div className="receiptResource">
                                                                                                        {
                                                                                                            event["receiptList"].length === 0
                                                                                                                ? <div>입력된 영수증이 없습니다.</div>
                                                                                                                : (<>
                                                                                                                    <div className="receiptTitle"><h5>{receipt["receiptTitle"]}</h5>
                                                                                                                        {
                                                                                                                            receipt["receiptDetailList"].length === 0
                                                                                                                                ? null
                                                                                                                                : <div>{j + 1}번째 영수증 금액 : {sumReceipt(receipt["receiptDetailList"])}원</div>
                                                                                                                        }
                                                                                                                    </div>
                                                                                                                    <div>{receipt["receiptContext"]}</div>
                                                                                                                    {
                                                                                                                        receipt["receiptDetailList"].length === 0
                                                                                                                            ? <div>입력된 영수증 내역이 없습니다.</div>
                                                                                                                            : (<>
                                                                                                                                <table className="receiptTable">
                                                                                                                                    <thead>
                                                                                                                                        <tr>
                                                                                                                                            <th>품명</th>
                                                                                                                                            <th>단가</th>
                                                                                                                                            <th>수량</th>
                                                                                                                                            <th>가격</th>
                                                                                                                                        </tr>
                                                                                                                                    </thead>
                                                                                                                                    <tbody>
                                                                                                                                        {receipt["receiptDetailList"].map((item, k) => {
                                                                                                                                            return (<tr>
                                                                                                                                                <td id="context" contentEditable={fixEventButton[i]}
                                                                                                                                                    onInput={(e) => {
                                                                                                                                                        console.log(e.currentTarget.textContent);
                                                                                                                                                        console.log(quarter[currentQuarter]["eventList"][i]["receiptList"][j]["receiptDetailList"][k]["context"]);
                                                                                                                                                        changeItem("context", e.currentTarget.textContent, i, j, k);
                                                                                                                                                    }}>{item["context"]}</td>

                                                                                                                                                <td id='price' contentEditable={fixEventButton[i]}
                                                                                                                                                    onInput={(e) => {
                                                                                                                                                        changeItem("price", e.currentTarget.textContent, i, j, k);
                                                                                                                                                        console.log(document.getElementById("price"));
                                                                                                                                                    }}>{item["price"]}</td>
                                                                                                                                                <td id='amount' contentEditable={fixEventButton[i]} onInput={(e) => {
                                                                                                                                                    changeItem("amount", e.currentTarget.textContent, i, j, k);
                                                                                                                                                }}>{item["amount"]}</td>
                                                                                                                                                <td>{sumItems(item["price"], item["amount"])}</td>
                                                                                                                                            </tr>)
                                                                                                                                        })
                                                                                                                                        }
                                                                                                                                    </tbody> </table>
                                                                                                                            </>
                                                                                                                            )
                                                                                                                    }

                                                                                                                </>)}
                                                                                                    </div>
                                                                                                    {
                                                                                                        event["receiptList"].length === 0
                                                                                                            ? null
                                                                                                            : <img src={receipt["receiptImg"]} alt={receipt["receiptImg"]} style={{ backgroundColor: "var(--color-leftPanel)" }} height={"150"} width={"100"} />
                                                                                                    }
                                                                                                </div>

                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </div>)

                                                                        }


                                                                    </div>
                                                                    <div className="cardImg">
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                        )
                                                }
                                                <div style={{ marginBottom: "40px", display: "flex", justifyContent: "center" }}>
                                                    <button className="editButton" onClick={() => {
                                                        eventAddButton(currentQuarter);
                                                    }} > 행사 추가 </button>
                                                </div>
                                            </div>
                                            {/* 장부 */}

                                            {/* 2 */}
                                            <div className="remotePanel">
                                                <div className="remotePanelBox">
                                                    <div>
                                                        <h5>행사 목록</h5>
                                                        {
                                                            quarter[currentQuarter]["eventList"] === undefined
                                                                ? (<div>입력된 행사가 없습니다.</div>)
                                                                : (<>{
                                                                    quarter[currentQuarter]["eventList"].map((event, i) => {
                                                                        return (<div>{event["eventTitle"]}</div>)
                                                                    })
                                                                }
                                                                </>)
                                                        }
                                                        <div style={{ color: "#d32c2c" }}>
                                                            ※ 장부를 잘못 기입해서 문제가 발생할 경우의 책임은 학생회장 본인에게 있습니다.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* 2 */}
                                        </div>
                                    </div>

                                    {/* rightPanel */}
                                </>
                                )
                        }</>)
            }


        </div>
    )
}

export default MainPage;