import React, { Component } from "react";
import "../scss/day-off.scss";
import { apiLineBotDayoffPOST } from "../api";
class Day_Off_Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      course: "",
      course_location: "",
      reason: "",
      phone: "",
      status: 0,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    if (dateRegex.test(this.state.date)) {
      console.log("pass");
    } else {
      alert("日期格式錯誤！（請檢查是否符合：YYYY-MM-DD）");
    }
    e.preventDefault();
    const dayoffObj = {
      name: this.state.name,
      date: this.state.date,
      course: this.state.course,
      course_location: this.state.course_location,
      reason: this.state.reason,
      phone: this.state.phone,
    };
    apiLineBotDayoffPOST(dayoffObj).then((res) => {
      alert("提交成功!");
      this.setState({ status: 1 });
      window.location.reload(false);
    });
  }

  render() {
    if (this.state.status == 0) {
      return (
        <div className="day-off-form">
          <div className="background">
            <div className="container">
              <div className="screen">
                <div className="screen-header">
                  <div className="screen-header-left">
                    <div className="screen-header-button close"></div>
                    <div className="screen-header-button maximize"></div>
                    <div className="screen-header-button minimize"></div>
                  </div>
                  <div className="screen-header-right">
                    <div className="screen-header-ellipsis"></div>
                    <div className="screen-header-ellipsis"></div>
                    <div className="screen-header-ellipsis"></div>
                  </div>
                </div>
                <div className="screen-body">
                  <div className="screen-body-item left">
                    <div className="app-title">
                      <span>猿創力</span>
                      <span>請假表單</span>
                    </div>
                    <div className="app-contact">
                      聯絡電話 : 09XX - XXX - XXX
                    </div>
                  </div>
                  <div className="screen-body-item">
                    <form className="app-form" onSubmit={this.onSubmit}>
                      <div className="app-form-group">
                        <input
                          className="app-form-control"
                          placeholder="yyyy-mm-dd"
                          type="date"
                          name="date"
                          onChange={this.onChange}
                          required={true}
                        />
                        <span className="tip">
                          *欲請假之日期(例如：2020-08-09)
                        </span>
                      </div>
                      <div className="app-form-group">
                        <input
                          className="app-form-control"
                          placeholder="學生姓名"
                          name="name"
                          onChange={this.onChange}
                          required={true}
                        />
                      </div>
                      <div className="app-form-group">
                        <input
                          className="app-form-control"
                          placeholder="課程"
                          name="course"
                          onChange={this.onChange}
                          list="courselist"
                          required={true}
                        />
                        <datalist id="courselist">
                          <option>AE401</option>
                          <option>AE402</option>
                          <option>AE403</option>
                          <option>AE404</option>
                        </datalist>
                      </div>
                      <div className="app-form-group">
                        <input
                          className="app-form-control"
                          placeholder="課堂教室"
                          name="course_location"
                          onChange={this.onChange}
                          list="locationlist"
                          required={true}
                        />
                        <datalist id="locationlist">
                          <option>總部</option>
                          <option>天母</option>
                          <option>高雄</option>
                          <option>台南</option>
                        </datalist>
                      </div>
                      <div className="app-form-group">
                        <input
                          className="app-form-control"
                          placeholder="請假事由"
                          name="reason"
                          onChange={this.onChange}
                          required={false}
                        />
                      </div>
                      <div className="app-form-group">
                        <input
                          className="app-form-control"
                          placeholder="家長聯絡電話"
                          name="phone"
                          onChange={this.onChange}
                          required={true}
                        />
                      </div>
                      <div className="app-form-group buttons">
                        <button className="app-form-button" type="submit">
                          確認送出
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="loader">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    }
  }
}
export default Day_Off_Form;
