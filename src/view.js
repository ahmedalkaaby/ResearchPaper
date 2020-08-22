import React from "react";
import firebase from "./config";
import banner from "./styles/bannar_02.jpg";
import Button from "@material-ui/core/Button";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Collapse from "@material-ui/core/Collapse";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import { Link } from "react-router-dom";
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  let date, newDate, startDate, endDate;
  if (typeof row.Date === "string") {
    date = row.Date;
    newDate = date;
  } else {
    date = new Date(row.Date.seconds * 1000);
    newDate =
      date.getFullYear() +
      "-" +
      ("0" + date.getMonth()).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2);
  }
  if (typeof row.StartDate === "string") {
    date = row.StartDate;
    startDate = date;
  } else {
    date = new Date(row.StartDate.seconds * 1000);
    startDate =
      date.getFullYear() +
      "-" +
      ("0" + date.getMonth()).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2);
  }
  if (typeof row.EndDate === "string") {
    date = row.EndDate;
    endDate = date;
  } else {
    date = new Date(row.EndDate.seconds * 1000);
    endDate =
      date.getFullYear() +
      "-" +
      ("0" + date.getMonth()).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2);
  }

  return (
    <div
      onClick={() => setOpen(!open)}
      className="flex flex-col h-auto px-4 bg-indigo-200 hover:bg-indigo-300 border border-gray-400 rounded-lg my-8 cursor-pointer"
    >
      {/* {idx + 1} - <h1 className="mr-2">{value.Title}</h1> */}
      <React.Fragment>
        <div className="flex justify-between h-12 items-center">
          <div>
            <h1 className="text-lg font-meduim">
              {props.idx + 1}: {row.Title} / للباحث ({" "}
              {row.ResearchersInfo[0].name} )
            </h1>
          </div>
          <div>
            <IconButton aria-label="expand row" size="small">
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </div>
        </div>
        <TableRow>
          <TableCell
            style={{ paddingBottom: 0, paddingTop: 0, fontFamily: "cairo" }}
            colSpan={6}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <div className="bg-black h-px w-full"></div>
              <Table>
                <TableBody className="flex flex-col">
                  <TableRow key={row.Title}>
                    <div className="flex text-lg justify-start w-full my-4 mr-4 ml-40">
                      <h1 className="ml-6">الجامعة : {row.University}</h1>
                      <h1 className="ml-6">القسم : {row.Department}</h1>
                      <h1 className="ml-6">الفرع : {row.Branch}</h1>
                      <h1 className="ml-6">العدد : {row.Issue}</h1>
                    </div>
                  </TableRow>
                  <TableRow>
                    <div className="flex text-lg justify-start w-full my-4 mr-4 ml-32">
                      <h1 className="ml-6"> تاريخ التسجيل : {newDate}</h1>
                      <h1 className="ml-6">تاريخ بدء البحث : {startDate}</h1>
                      <h1 className="ml-6">تاريخ انتهاء البحث : {endDate}</h1>
                    </div>
                  </TableRow>
                  <TableRow>
                    <div className="flex text-lg w-full justify-start my-4 mr-4 ml-32">
                      <h1>المشاركين في البحث : </h1>
                      {row.ResearchersInfo.map((user, idx) => (
                        <h1 className="ml-6">
                          {idx + 1} - {user.name} / {user.degree} /{" "}
                          {user.placeofwork}
                        </h1>
                      ))}
                    </div>
                  </TableRow>
                  <TableRow>
                    <div className="flex text-lg justify-start w-full my-4 mr-4 ml-32">
                      <h1 className="ml-6"> نوع البحث : {row.ResearchType}</h1>
                      <h1 className="ml-6">
                        طبيعة البحث : {row.ResearchNature}
                      </h1>
                      <h1 className="ml-6"> هل البحث مستل؟ {row.Plagiarism}</h1>
                    </div>
                  </TableRow>
                  <TableRow>
                    <div className="flex text-lg justify-between w-full my-4 mr-4 ml-32">
                      <h1> مستلزمات البحث : {row.Requirements}</h1>
                    </div>
                  </TableRow>
                  <TableRow>
                    <div className="text-right text-lg w-full mt-4 mb-2 mr-4">
                      <h1> موجز البحث واهدافه : </h1>
                    </div>
                    <div className="flex justify-start text-right text-lg w-full mb-4 mr-4">
                      <div>
                        <h1>
                          <b>-</b>
                        </h1>
                      </div>
                      <div className="pr-2">
                        <p> {row.Summary}</p>
                      </div>
                    </div>
                  </TableRow>
                </TableBody>
              </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    </div>
  );
}
function View() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("users").get();
      setUsers(data.docs.map((doc) => ({ ...doc.data() })));
    };
    fetchData();
  }, []);

  return (
    <div className="h-screen bg-blue-900">
      <div className="h-auto flex justify-center bg-blue-900">
        <div className="w-2/3 bg-white p-10 rounded-xl m-20">
          <div className=" flex flex-col items-center">
            <div>
              <img src={banner} alt="banner"></img>
            </div>
            <div className="mt-10 p-2 w-full">
              <h1 className="text-5xl font-semibold mb-16 text-center">
                الإستمارات المدرجة ضمن قاعدة البيانات
              </h1>
              {users.map((row, idx) => (
                <Row row={row} idx={idx} ary={row.ResearchersInfo} />
              ))}
            </div>
          </div>
          <div className="mt-24 text-left">
            <Link to="/">
              <Button variant="contained" size="large" color="primary">
                <h1 className="text-lg">العودة الى الرئيسية</h1>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
