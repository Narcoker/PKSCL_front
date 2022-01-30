import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import './css/EditProfile.css'
import { useHistory } from 'react-router-dom';

function EditProfile(props) {
    const history = useHistory();
    const modalRef = useRef();

    const [boxState, setBoxState] = useState("profile");
    const [stdID, setStdID] = useState("");
    const [major, setMajor] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [certFile, setCertFile] = useState("");
    const [majorLogo, setMajorLogo] = useState("");
    const [isCorrect, setIsCorrect] = useState(
        {
            stdID: false,
            major: false,
            name: false,
            phoneNumber: false,
            email: false,
            certFile: false,
            majorLogo: false,
            inputEmail: false,
            inputPassword: false,
            inputNewPassword: false,
            inputCheckNewPassword: false,
        }
    );

    const [editButtonState, setEditButtonState] = useState(false);

    const [majorList, setMajorList] = useState(
        [
            "국어국문학과", "영어영문학부", "일어일문학부", "사학과", "경제학부", "법학과", "행정학과", "국제지역학부", "중국학과", "신문방송학과", "정치외교학과", "유아교육과", "시각디자인학과", "공업디자인학과", "패션디자인학과", "경영학부", "국제통상학부", "응용수학과", "통계학과", "물리학과", "화학과", "미생물학과", "해양스포츠학과", "간호학과", "과학시스템시뮬레이션학과", "건축공학과", "건축학과", "소방공학과", "시스템경영공학부", "IT융합응용공학과", "안전공학과", "융합디스플레이공학과", "의공학과", "전기공학과", "전자공학과", "정보통신공학과", "제어계측공학과", "조선해양시스템공학과", "컴퓨터공학과", "토목공학과", "고분자공학과", "공업화학과", "금속공학과", "기계공학과", "기계설계공학과", "기계시스템공학과", "냉동공조공학과", "신소재시스템공학과", "인쇄정보공학과", "재료공학과", "화학공학과", "지속가능공학부", "식품공학과", "해양바이오신소재학과", "해양생산시스템관리학부", "해양수산경영학과", "수해양산업교육과", "자원생물학과", "식품영양학과", "생물공학과", "수산생명의학과", "환경공학과", "해양공학과", "해양학과", "지구환경과학과", "환경대기과학과", "에너지자원공학과", "공간정보시스템공학과", "생태공학과", "데이터정보과학부(빅데이터융합전공)", "데이터정보과학부(통계·데이터사이언스전공)", "미디어커뮤니케이션학부(언론정보전공)", "미디어커뮤니케이션학부(휴먼ICT융합전공)", "스마트헬스케어학부(의공학전공)", "스마트헬스케어학부(해양스포츠전공)", "스마트헬스케어학부(휴먼바이오융합전공)", "전자정보통신공학부(전자공학전공)", "전자정보통신공학부(정보통신공학전공)", "조형학부(건축학전공)", "조형학부(공업디자인전공)", "조형학부(시각디자인전공)", "컴퓨터공학부(소프트웨어·인공지능전공)", "컴퓨터공학부(컴퓨터공학전공)", "평생교육·상담학과", "기계조선융합공학과", "전기전자소프트웨어공학과", "공공안전경찰학과"
        ]);

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const [inputNewPassword, setInputNewPassword] = useState("");
    const [inputCheckNewPassword, setInputCheckNewPassword] = useState("");

    const [newPasswordButton, setNewPasswordButton] = useState(false);


    function changeIsCorrect(key, type) {
        var temp = { ...isCorrect };
        if (key === "stdID") temp.stdID = type;
        else if (key === "major") temp.major = type;
        else if (key === "name") temp.name = type;
        else if (key === "phoneNumber") temp.phoneNumber = type;
        else if (key === "email") temp.email = type;
        else if (key === "certFile") temp.certFile = type;
        else if (key === "majorLogo") temp.majorLogo = type;
        else if (key === "inputEmail") temp.inputEmail = type;
        else if (key === "inputPassword") temp.inputPassword = type;
        else if (key === "inputNewPassword") temp.inputNewPassword = type;
        else if (key === "inputCheckNewPassword") temp.inputCheckNewPassword = type;
        else console.log("function changeIsCorrect() error ");

        setIsCorrect(temp);
    };

    function withdrawal() {
        console.log(isCorrect.inputEmail + " " + isCorrect.inputPassword);
        if (isCorrect.inputEmail && isCorrect.inputPassword) {
            if (window.confirm('정말 탈퇴하시겠습니까?')) {
                const payload = { "inputEmail": inputEmail, "inputPassword": inputPassword }
                //axio.탈퇴
                axios.post('/withdrawal', payload)
                    .then((payload) => {
                        switch (payload.status) {
                            case 200:
                                alert("회원 탈퇴가 정상적으로 처리 되었습니다.");
                                history.push('/');
                                break;
                            default: break;
                        }
                    })
                    .catch((error) => {
                        switch (error.response.status) {
                            case 401:
                                alert("이메일과 패스워드가 올바르지 않습니다.");
                                break;
                            default: break;
                        }
                    })
            }
            else {
                setBoxState("profile");
                reset();
            }
        } else {
            alert("이메일과 패스워드를 모두 입력해주세요.");
        }
    }

    function newPassword() {
        const payload = { "inputPassword": inputPassword, "inputNewPassword": inputNewPassword, "inputCheckNewPassword": inputCheckNewPassword }
        axios.patch('/password', payload)
            .then((payload) => {
                switch (payload.status) {
                    case 200:
                        alert("비밀번호가 수정되었습니다.");
                        setBoxState("profile");
                        break;
                    default:
                        alert(payload.status);
                }

            })
            .catch((error) => {
                alert(error.response.status); // 수정필요
            })
    }

    function patchProfile() {
        let payload = new FormData();

        payload.append("stdID", stdID);
        payload.append("name", name);

        if (props.loginPosition === "student") { //학생
            payload.append("major", major);
            payload.append("certFile", certFile);
        }
        else if (props.loginPosition === "student") { //학생회장
            payload.append("phoneNumber", phoneNumber);
            payload.append("majorLogo", majorLogo);
        }

        axios.patch("/profile", payload, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((payload) => {
            switch (payload.status) {
                case 200:
                    alert("정보가 변경되었습니다.");
                    break;
                default: alert("success: " + payload.status); break;
            }
        })
            .catch((error) => {
                switch (error.response.status) {
                    case 400:
                        alert(error.response.data.errorMessage);
                        break;
                    default:
                        alert("error: " + error.status);
                        break;
                }
            })


    }

    function reset() {
        setInputEmail("");
        setInputPassword("");
        setInputNewPassword("");
        setInputCheckNewPassword("");
    }

    useEffect(() => {
        if (props.loginPosition === "president") {
            if (isCorrect.stdID && isCorrect.name && isCorrect.phoneNumber && isCorrect.majorLogo) {
                setEditButtonState(true);
            } else {
                setEditButtonState(false);
            }
            console.log("isCorrect.stdID: " + isCorrect.stdID + " isCorrect.name: " + isCorrect.name + " isCorrect.phoneNumber: " + isCorrect.phoneNumber + "  isCorrect.majorLogo: " + isCorrect.majorLogo);
        } else if (props.loginPosition === "student") {
            if (isCorrect.stdID && isCorrect.name && isCorrect.major && isCorrect.certFile) {
                setEditButtonState(true);
            } else {
                setEditButtonState(false);
            }
            console.log("isCorrect.stdID: " + isCorrect.stdID + " isCorrect.name: " + isCorrect.name + " isCorrect.major: " + isCorrect.major + " isCorrect.certFile: " + isCorrect.certFile);
        }

        if (isCorrect.inputPassword && isCorrect.inputNewPassword && isCorrect.inputCheckNewPassword) {
            if (inputNewPassword === inputCheckNewPassword)
                setNewPasswordButton(true);
            else {
                setNewPasswordButton(false);
            }
        } else {
            setNewPasswordButton(false);
        }

    }, [isCorrect])

    useEffect(() => {
        //debug
        setStdID(() => "123456789");
        setMajor(() => "1");
        setName(() => "홍길동");
        setPhoneNumber(() => "010-0000-0000");
        setEmail(() => "userID@pukyong.ac.kr");
        setCertFile({ name: "학생증.jpg" });
        setMajorLogo({ name: "학과로고.jpg" });

        setIsCorrect(
            {
                stdID: true,
                major: true,
                name: true,
                phoneNumber: true,
                email: true,
                certFile: true,
                majorLogo: true,
                inputEmail: false,
                inputPassword: false,
                inputNewPassword: false,
                inputCheckNewPassword: false
            }
        );



        //get 요청해서 로그인된 정보 가져오기
        axios.get('/profile')
            .then((payload) => {
                switch (payload.status) {
                    case 200:
                        setStdID(...payload.data.stdID);
                        setMajor(...payload.data.major);
                        setName(...payload.data.name);
                        setEmail(...payload.data.email);


                        if (props.loginPosition === "prsident") {
                            setPhoneNumber(...payload.data.phoneNumber);
                            setMajorLogo(...payload.data.majorLogo);
                            setIsCorrect(
                                {
                                    stdID: true,
                                    major: true,
                                    name: true,
                                    phoneNumber: true,
                                    email: true,
                                    certFile: false,
                                    majorLogo: true,
                                    inputEmail: false,
                                    inputPassword: false,
                                    inputNewPassword: false,
                                    inputCheckNewPassword: false,
                                }
                            );
                        } else if (props.loginPosition === "student") {
                            setCertFile(...payload.data.certFile);
                            setIsCorrect(
                                {
                                    stdID: true,
                                    major: true,
                                    name: true,
                                    phoneNumber: false,
                                    email: true,
                                    certFile: true,
                                    majorLogo: false,
                                    inputEmail: false,
                                    inputPassword: false,
                                    inputNewPassword: false,
                                    inputCheckNewPassword: false,
                                }
                            );
                        }
                        break;
                    default: break;
                }

            })
            .catch((error) => {
                switch (error.response.status) {
                    case 400: console.log("정보를 로드하는데 실패했습니다."); break;
                    default: console.log("error: " + error.response.status); break;
                }

            })
        //get 요청해서 학과리스트 가져오기
        axios.get('/major-list')
            .then((payload) => {
                setMajorList([...payload.data.majorList]);
            })
            .catch((error) => {
                switch (error.response.status) {
                    case 400: alert("학과리스트를 불러올 수 없습니다."); return;
                    default: console.log("error: " + error.response.status); return;
                }
            })

        document.addEventListener('mousedown', clickModalOutside);

        return () => {
            document.removeEventListener('mousedown', clickModalOutside);
        };

    }, [])

    const clickModalOutside = event => {

        if (props.editProfileState && (event.target === modalRef.current)) {
            props.setEditProfileState(false);
        }
    };


    useEffect(() => {
        if (phoneNumber.length === 10) {
            setPhoneNumber(phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
        }
        if (phoneNumber.length === 13) {
            setPhoneNumber(phoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
    }, [phoneNumber]);

    return (
        <div className="errorContainer" ref={modalRef}>
            <div className="errorBox">
                {
                    boxState === "profile"
                        ? <>
                            <div className='boxTitle' >
                                <h2 style={{ marginLeft: "20%" }}><i className="fas fa-users" />프로필 편집</h2>
                                <button className="btn btn-danger" style={{ marginLeft: "auto", height: "30px" }} onClick={() => { setBoxState("withdrawal") }}>회원탈퇴</button>
                            </div>

                            <div className='editField'>
                                <div className="inputField">
                                    <i className="fas fa-key"></i>
                                    <label>비밀번호</label>
                                    <empty style={{ width: "200px" }}></empty>
                                    <button type='button' onClick={() => { setBoxState("newPassword") }}>변경</button>
                                </div>

                                <div className="inputField">
                                    <i className="fas fa-lock"></i>
                                    <label>학번</label>
                                    <input onChange={(e) => {
                                        setStdID(e.target.value.replace(/[^0-9]/g, ''));
                                        if (e.target.value.length === 9) {
                                            changeIsCorrect("stdID", true);

                                        } else {
                                            changeIsCorrect("stdID", false);
                                        }
                                    }
                                    } name="stdID" value={stdID} maxLength="9" placeholder="내용을 입력해주세요" type="text" />

                                </div>

                                <div className="inputField">
                                    <i className="fas fa-book-open" style={{ fontSize: "0.85rem" }}></i>
                                    <label >학과</label>
                                    {
                                        props.loginPosition === "president"
                                            ?
                                            <input type="text" list="majorList-options" id='major' name="major" placeholder="학과를 입력하세요." value={major} readOnly></input>
                                            :
                                            <>

                                                <input type="text" list="majorList-options" id='major' name="major" placeholder={majorList[major]}
                                                    style={{ textColor: "black" }}
                                                    onChange={(e) => {
                                                        setMajor(majorList.indexOf(e.target.value) + 1);

                                                        if (majorList.includes(e.target.value)) {
                                                            changeIsCorrect("major", true);
                                                        } else {
                                                            changeIsCorrect("major", false);
                                                        }
                                                    }
                                                    } ></input>
                                                <datalist id="majorList-options" >
                                                    {
                                                        majorList.map((majorName, i) => {
                                                            return (
                                                                <option value={majorName} key={i} ></option>
                                                            )
                                                        })
                                                    }
                                                </datalist>
                                            </>



                                    }

                                </div>

                                <div className="inputField">
                                    <i className="fas fa-user"></i>
                                    <label>이름</label>
                                    <input onChange={(e) => {
                                        setName(e.target.value)
                                        if (e.target.value === "") {
                                            changeIsCorrect("name", false);
                                        } else {
                                            changeIsCorrect("name", true);
                                        }
                                    }
                                    } name="name" value={name} type="text" placeholder="이름을 입력해주세요" />
                                </div>

                                {
                                    props.loginPosition === "president"
                                        ?
                                        <div className="inputField">
                                            <i className="fas fa-user"></i>
                                            <label>전화번호</label>
                                            <input onChange={(e) => {
                                                setPhoneNumber(e.target.value)
                                                if (e.target.value === "") {
                                                    changeIsCorrect("phoneNum", false);
                                                } else {
                                                    changeIsCorrect("phoneNum", true);
                                                }
                                            }
                                            } maxLength="13" name="phoneNum" value={phoneNumber} type="text" placeholder="내용을 입력하세요" />
                                        </div>
                                        : null
                                }



                                <div className="inputField">
                                    <i className="fas fa-envelope"></i>
                                    <label>이메일</label>
                                    <input id="inputEmail" name="email" value={email} type="text" readOnly />
                                </div>

                                {
                                    props.loginPosition === "president"
                                        ?
                                        <div className="inputField">
                                            <i className="fas fa-key"></i>
                                            <label>학과로고</label>
                                            {/* <empty style={{ width: "200px" }}></empty> */}
                                            <input className='uploadName' placeholder='학과로고를 첨부해주세요' value={majorLogo.name} readOnly />
                                            <label htmlFor="majorLogo">찾기</label>
                                            <input type="file" id='majorLogo' name="majorLogo" accept='image/*'
                                                onChange={(e) => {
                                                    majorLogo(e.target.files[0]);
                                                    if (e.target.value === "") {
                                                        changeIsCorrect("majorLogo", false);
                                                    } else {
                                                        changeIsCorrect("majorLogo", true);
                                                    }
                                                }} />
                                            <button type='button'>변경하기</button>
                                        </div>
                                        :
                                        <div className="inputField">
                                            <i className="fas fa-user-graduate"></i>
                                            <label>학생증</label>
                                            <input style={{ width: "200px" }} value={certFile.name} readOnly></input>
                                            <label className='fileButton' htmlFor="file">찾기</label>
                                            <input type="file" id="file" name="file" style={{ display: "none" }} accept='image/*'
                                                onChange={(e) => {
                                                    setCertFile(e.target.files[0]);
                                                    if (e.target.value === "") {
                                                        changeIsCorrect("certFile", false);
                                                    } else {
                                                        changeIsCorrect("certFile", true);
                                                    }

                                                }}></input>
                                        </div>
                                }
                            </div>

                            <div className="errorBtns">
                                <button className="errorBtn" type="button" onClick={() => {
                                    editButtonState ? patchProfile() : alert('정보를 모두 입력해주세요.');
                                }}>저장하기</button>
                                <button className="errorBtn" type="button" style={{ backgroundColor: "white", color: "black" }} onClick={() => { props.setEditProfileState(false); reset(); }}>취소</button>

                            </div>
                        </>
                        : boxState === "withdrawal"
                            ? <>
                                <div className='boxTitle' >
                                    <h2 ><i className="fas fa-users" style={{ color: "#dc3545" }} />회원 탈퇴</h2>
                                </div>

                                <div className='editField' style={{ borderColor: "#dc3545" }}>

                                    <div className="inputField">
                                        <i className="fas fa-envelope"></i>
                                        <label>이메일</label>
                                        <input id="inputEmail" onChange={(e) => {
                                            setInputEmail(e.target.value)
                                            if (e.target.value === "") {
                                                changeIsCorrect("inputEmail", false);
                                            } else {
                                                changeIsCorrect("inputEmail", true);
                                            }
                                        }} value={inputEmail} type="text" placeholder='이메일을 입력하세요.' />
                                    </div>

                                    <div className="inputField">
                                        <i className="fas fa-key"></i>
                                        <label>비밀번호</label>
                                        {/* <empty style={{ width: "200px" }}></empty> */}
                                        <input type="password" onChange={(e) => {
                                            setInputPassword(e.target.value)
                                            if (e.target.value === "") {
                                                changeIsCorrect("inputPassword", false);
                                            } else {
                                                changeIsCorrect("inputPassword", true);
                                            }
                                        }} value={inputPassword} placeholder='비밀번호를 입력하세요.' />

                                    </div>
                                </div>

                                <div className="errorBtns">
                                    <button className="errorBtn" type="button" style={{ backgroundColor: "#dc3545" }} onClick={() => { withdrawal(); }}>탈퇴</button>
                                    <button className="errorBtn" type="button" style={{ backgroundColor: "white", color: "black" }} onClick={() => { setBoxState("profile") }}>취소</button>

                                </div>
                            </>
                            : boxState === "newPassword"
                                ? <>
                                    <div className='boxTitle' >
                                        <h2 ><i className="fas fa-users" />비밀번호 변경</h2>
                                    </div>

                                    <div className='editField' >
                                        <div className="inputField">
                                            <i className="fas fa-key"></i>
                                            <label style={{ width: "80px" }}>비밀번호</label>
                                            {/* <empty style={{ width: "200px" }}></empty> */}
                                            <input type="password" onChange={(e) => {
                                                setInputPassword(e.target.value)
                                                if (e.target.value === "") {
                                                    changeIsCorrect("inputPassword", false);
                                                } else {
                                                    changeIsCorrect("inputPassword", true);
                                                }
                                            }} value={inputPassword} placeholder='현재 비밀번호를 입력하세요.' />
                                        </div>

                                        <div className="inputField">
                                            <i className="fas fa-key"></i>
                                            <label style={{ width: "80px" }}>새 비밀번호</label>
                                            {/* <empty style={{ width: "200px" }}></empty> */}
                                            <input type="password" onChange={(e) => {
                                                setInputNewPassword(e.target.value)
                                                if (e.target.value === "") {
                                                    changeIsCorrect("inputNewPassword", false);
                                                } else {
                                                    changeIsCorrect("inputNewPassword", true);
                                                }
                                            }} value={inputNewPassword} placeholder='새 비밀번호를 입력하세요.' />
                                        </div>

                                        <div className="inputField">
                                            <i className="fas fa-key"></i>
                                            <label style={{ width: "80px" }} >새 비밀번호 확인</label>
                                            {/* <empty style={{ width: "200px" }}></empty> */}
                                            <input type="password" onChange={(e) => {
                                                setInputCheckNewPassword(e.target.value)
                                                if (e.target.value === "") {
                                                    changeIsCorrect("inputCheckNewPassword", false);
                                                } else {
                                                    changeIsCorrect("inputCheckNewPassword", true);
                                                }
                                            }} value={inputCheckNewPassword} placeholder='새 비밀번호를 다시 입력하세요.' />
                                        </div>
                                    </div>

                                    <div className="errorBtns">
                                        {
                                            newPasswordButton
                                                ?
                                                <button className="errorBtn" type="button" onClick={() => { newPassword(); }}>변경</button>
                                                :
                                                <button className="errorBtn" type="button" style={{ backgroundColor: "white", color: "black" }}
                                                    onClick={() => { console.log(isCorrect.inputPassword + " " + isCorrect.inputNewPassword + " " + isCorrect.inputCheckNewPassword); }}>변경</button>

                                        }

                                        <button className="errorBtn" type="button" style={{ backgroundColor: "white", color: "black" }} onClick={() => { setBoxState("profile"); reset(); }}>취소</button>

                                    </div>
                                </>
                                : null
                }

            </div>
        </div>

    );
}

export default EditProfile;