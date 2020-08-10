import React from "react";
import banner from "./styles/bannar_02.jpg";
import Table from "./components/table";
import Input from "./components/input";
import Button from "@material-ui/core/Button";
import { ReactComponent as Send } from "./styles/send.svg";
import TextField from "@material-ui/core/TextField";
import Summary from "./components/summary";
import Choices from "./components/choices";

class Main extends React.Component {
  render() {
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
      <div className="flex justify-center bg-blue-900">
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
                <Input ph="الجامعة" size="50" />
                <Input ph="العدد" size="50" />
              </div>
              <div className="flex">
                <div className="ml-20">
                  <Input ph="القسم" size="50" />
                  <Input ph="الفرع" size="50" />
                </div>
                <h1 className="flex items-center mr-40 mt-2">التاريخ:</h1>

                <div className="w-full flex justify-center items-center">
                  <TextField
                    id="date"
                    type="date"
                    defaultValue={ymd}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div>
                <Input ph="عنوان البحث" size="140" />
              </div>
              <div className="my-2">
                <Table />
              </div>
              <Summary />
              <Choices
                headline="نوع البحث :"
                c1="اكاديمي"
                c2="تطبيقي"
                c3="اكاديمي و تطبيقي"
              />
              <Choices
                headline="طبيعة البحث :"
                c1="نظري"
                c2="عملي"
                c3="نظري و عملي"
              />

              <Choices headline=" هل البحث مستل؟" c1="نعم" c2="لا" />
              <div className="flex mt-2">
                <h1 className="mr-1 mt-8 mb-1 text-xl">تاريخ بداية البحث :</h1>
                <div className="mr-8 pt-4 flex justify-center items-center">
                  <TextField
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
            <Button variant="contained" size="large" color="primary">
              <h1 className="text-lg">إرسال</h1>
              <Send className="mr-2" width="20px" height="20px" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
