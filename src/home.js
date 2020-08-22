import React from "react";
import { Link } from "react-router-dom";
import banner from "./styles/bannar_02.jpg";
import Table from "./components/table";
import Input from "./components/input";
import Button from "@material-ui/core/Button";
import { ReactComponent as Send } from "./styles/send.svg";
import TextField from "@material-ui/core/TextField";
import Summary from "./components/summary";
import Choices from "./components/choices";
import firebase from "./config";
function Home() {
  const [newUniversity, setNewUniversity] = React.useState(),
    [newIssue, setNewIssue] = React.useState(),
    [newDepartment, setNewDepartment] = React.useState(),
    [newBranch, setNewBranch] = React.useState(),
    [newTitle, setNewTitle] = React.useState(),
    [newSummary, setNewSummary] = React.useState(),
    [newRequirments, setNewRequirments] = React.useState(),
    [newMCQ1, setNewMCQ1] = React.useState(),
    [newMCQ2, setNewMCQ2] = React.useState(),
    [newMCQ3, setNewMCQ3] = React.useState(),
    [newDate, setNewDate] = React.useState(new Date()),
    [newStartDate, setNewStartDate] = React.useState(new Date()),
    [newEndDate, setNewEndDate] = React.useState(new Date()),
    [items, setItems] = React.useState({});

  const handleChangeTable = (array) => {
      setItems(array);
    },
    handleChangeUni = (input) => {
      setNewUniversity(input);
    },
    handleChangeIssue = (input) => {
      setNewIssue(input);
    },
    handleChangeDep = (input) => {
      setNewDepartment(input);
    },
    handleChangeBranch = (input) => {
      setNewBranch(input);
    },
    handleChangeTitle = (input) => {
      setNewTitle(input);
    },
    handleChangeSummary = (input) => {
      setNewSummary(input);
    },
    handleChangeReq = (input) => {
      setNewRequirments(input);
    },
    handleChangeMCQ1 = (input) => {
      setNewMCQ1(input);
    },
    handleChangeMCQ2 = (input) => {
      setNewMCQ2(input);
    },
    handleChangeMCQ3 = (input) => {
      setNewMCQ3(input);
    },
    handleChangeDate = (input) => {
      setNewDate(input);
    },
    handleChangeStartDate = (input) => {
      setNewStartDate(input);
    },
    handleChangeEndDate = (input) => {
      setNewEndDate(input);
    };
  let check;
  if (
    newBranch &&
    newIssue &&
    newDepartment &&
    newMCQ1 &&
    newMCQ2 &&
    newMCQ3 &&
    newRequirments &&
    newSummary &&
    newTitle &&
    newUniversity &&
    items[0].name !== ""
  ) {
    check = true;
  }
  const addHandler = () => {
    if (check) {
      const db = firebase.firestore();
      db.collection("users").add({
        University: newUniversity,
        Issue: newIssue,
        Department: newDepartment,
        Branch: newBranch,
        Title: newTitle,
        Summary: newSummary,
        Requirements: newRequirments,
        ResearchType: newMCQ1,
        ResearchNature: newMCQ2,
        Plagiarism: newMCQ3,
        Date: newDate,
        StartDate: newStartDate,
        EndDate: newEndDate,
        ResearchersInfo: items,
      });
    } else {
      alert("جميع الحقول مطلوبة !");
    }
  };

  const date = new Date();
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const ymd =
    date.getFullYear() + "-" + months[date.getMonth()] + "-" + date.getDate();

  return (
    <div className="h-auto flex justify-center bg-blue-900">
      <div className="w-2/3 bg-white p-10 rounded-xl m-24">
        <div className="flex flex-col items-center">
          <div>
            <img src={banner} alt="banner"></img>
          </div>
          <form className="mt-10 p-2">
            <h1 className="text-5xl font-semibold mb-16 text-center">
              استمارة اعتماد مشروع بحث علمي
            </h1>
            <div className="flex justify-between">
              <Input handleChange={handleChangeUni} ph="الجامعة" size="50" />
              <Input handleChange={handleChangeIssue} ph="العدد" size="50" />
            </div>
            <div className="flex">
              <div className="ml-20">
                <Input handleChange={handleChangeDep} ph="القسم" size="50" />
                <Input handleChange={handleChangeBranch} ph="الفرع" size="50" />
              </div>
              <h1 className="flex items-center mr-40 mt-2">التاريخ:</h1>

              <div className="w-full flex justify-center items-center">
                <TextField
                  onChange={(e) => handleChangeDate(e.target.value)}
                  id="date"
                  type="date"
                  defaultValue={ymd}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
            <div>
              <Input
                handleChange={handleChangeTitle}
                ph="عنوان البحث"
                size="140"
              />
            </div>
            <div className="my-2">
              <Table handleChange={handleChangeTable} />
            </div>
            <Summary handleChange={handleChangeSummary} />
            <Choices
              handleChange={handleChangeMCQ1}
              headline="نوع البحث :"
              c1="اكاديمي"
              c2="تطبيقي"
              c3="اكاديمي و تطبيقي"
            />
            <Choices
              handleChange={handleChangeMCQ2}
              headline="طبيعة البحث :"
              c1="نظري"
              c2="عملي"
              c3="نظري و عملي"
            />

            <Choices
              handleChange={handleChangeMCQ3}
              headline=" هل البحث مستل؟"
              c1="نعم"
              c2="لا"
            />
            <div className="flex mt-2">
              <h1 className="mr-1 mt-8 mb-1 text-xl">تاريخ بداية البحث :</h1>
              <div className="mr-8 pt-4 flex justify-center items-center">
                <TextField
                  onChange={(e) => handleChangeStartDate(e.target.value)}
                  id="date"
                  type="date"
                  defaultValue={ymd}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
            <div className="flex mt-2">
              <h1 className="mr-1 mt-8 mb-1 text-xl">
                التاريخ المتوقع لانتهاء البحث :
              </h1>
              <div className="mr-8 pt-4 flex justify-center items-center">
                <TextField
                  onChange={(e) => handleChangeEndDate(e.target.value)}
                  id="date"
                  type="date"
                  defaultValue={ymd}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>

            <div className="flex items-end">
              <h1 className="mr-1 mt-8 mb-1 text-xl">
                مستلزمات البحث النظرية والعملية :
              </h1>
              <div className="">
                <input
                  onChange={(e) => handleChangeReq(e.target.value)}
                  size="50"
                  type="text"
                  name="name"
                  className="h-full border rounded-lg border-gray-500 mr-4 pr-4"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="mt-16 text-left">
          <Link className="ml-6" to="/">
            <Button variant="contained" size="large" color="secondary">
              <h1 className="text-lg">العودة</h1>
            </Button>
          </Link>
          <Link onClick={addHandler} to={check ? "/" : <></>}>
            <Button variant="contained" size="large" color="primary">
              <h1 className="text-lg">إرسال</h1>
              <Send className="mr-2" width="20px" height="20px" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
