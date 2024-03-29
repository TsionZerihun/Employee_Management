import {SmallBox} from '@app/components';
import React from 'react';
import {ContentHeader} from '@components';

const Dashboard = () => {
  return (
    <div>
      <ContentHeader title="Dashboard" />

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>150</h3>

                  <p>New Orders</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag" />
                </div>
                <a href="/" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>
                    53<sup style={{fontSize: '20px'}}>%</sup>
                  </h3>

                  <p>Bounce Rate</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars" />
                </div>
                <a href="/" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>44</h3>

                  <p>User Registrations</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add" />
                </div>
                <a href="/" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>65</h3>

                  <p>Unique Visitors</p>
                </div>
                <div className="icon">
                  <i className="ion ion-pie-graph" />
                </div>
                <a href="/" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row">
        {/* Left col */}
        <section className="col-lg-7 connectedSortable">
          {/* Custom tabs (Charts with tabs)*/}
          
          {/* /.card */}
          {/* DIRECT CHAT */}
          <div className="card direct-chat direct-chat-primary">
            <div className="card-header">
              <h3 className="card-title">Direct Chat</h3>
              <div className="card-tools">
                <span title="3 New Messages" className="badge badge-primary">
                  3
                </span>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  title="Contacts"
                  data-widget="chat-pane-toggle"
                >
                  <i className="fas fa-comments" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              {/* Conversations are loaded here */}
              <div className="direct-chat-messages">
                {/* Message. Default to the left */}
                <div className="direct-chat-msg">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-left">
                      Alexander Pierce
                    </span>
                    <span className="direct-chat-timestamp float-right">
                      23 Jan 2:00 pm
                    </span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img
                    className="direct-chat-img"
                    src="/img/default-profile.png"
                    alt="message user image"
                  />
                  {/* /.direct-chat-img */}
                  <div className="direct-chat-text">
                    Is this template really for free? That's unbelievable!
                  </div>
                  {/* /.direct-chat-text */}
                </div>
                {/* /.direct-chat-msg */}
                {/* Message to the right */}
                <div className="direct-chat-msg right">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-right">
                      Sarah Bullock
                    </span>
                    <span className="direct-chat-timestamp float-left">
                      23 Jan 2:05 pm
                    </span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img
                    className="direct-chat-img"
                    src="/img/default-profile.png"
                    alt="message user image"
                  />
                  {/* /.direct-chat-img */}
                  <div className="direct-chat-text">You better believe it!</div>
                  {/* /.direct-chat-text */}
                </div>
                {/* /.direct-chat-msg */}
                {/* Message. Default to the left */}
                <div className="direct-chat-msg">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-left">
                      Alexander Pierce
                    </span>
                    <span className="direct-chat-timestamp float-right">
                      23 Jan 5:37 pm
                    </span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img
                    className="direct-chat-img"
                    src="/img/default-profile.png"
                    alt="message user image"
                  />
                  {/* /.direct-chat-img */}
                  <div className="direct-chat-text">
                    Working with AdminLTE on a great new app! Wanna join?
                  </div>
                  {/* /.direct-chat-text */}
                </div>
                {/* /.direct-chat-msg */}
                {/* Message to the right */}
                <div className="direct-chat-msg right">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-right">
                      Sarah Bullock
                    </span>
                    <span className="direct-chat-timestamp float-left">
                      23 Jan 6:10 pm
                    </span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img
                    className="direct-chat-img"
                    src="/img/default-profile.png"
                    alt="message user image"
                  />
                  {/* /.direct-chat-img */}
                  <div className="direct-chat-text">I would love to.</div>
                  {/* /.direct-chat-text */}
                </div>
                {/* /.direct-chat-msg */}
              </div>
              {/*/.direct-chat-messages*/}
              {/* Contacts are loaded here */}
              <div className="direct-chat-contacts">
                <ul className="contacts-list">
                  <li>
                    <a href="#">
                      <img
                        className="contacts-list-img"
                        src="/img/default-profile.png"
                        alt="User Avatar"
                      />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Count Dracula
                          <small className="contacts-list-date float-right">
                            2/28/2015
                          </small>
                        </span>
                        <span className="contacts-list-msg">
                          How have you been? I was...
                        </span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                  <li>
                    <a href="#">
                      <img
                        className="contacts-list-img"
                        src="/img/default-profile.png"
                        alt="User Avatar"
                      />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Sarah Doe
                          <small className="contacts-list-date float-right">
                            2/23/2015
                          </small>
                        </span>
                        <span className="contacts-list-msg">
                          I will be waiting for...
                        </span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                  <li>
                    <a href="#">
                      <img
                        className="contacts-list-img"
                        src="/img/default-profile.png"
                        alt="User Avatar"
                      />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Nadia Jolie
                          <small className="contacts-list-date float-right">
                            2/20/2015
                          </small>
                        </span>
                        <span className="contacts-list-msg">
                          I'll call you back at...
                        </span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                  <li>
                    <a href="#">
                      <img
                        className="contacts-list-img"
                        src="/img/default-profile.png"
                        alt="User Avatar"
                      />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Nora S. Vans
                          <small className="contacts-list-date float-right">
                            2/10/2015
                          </small>
                        </span>
                        <span className="contacts-list-msg">
                          Where is your new...
                        </span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                  <li>
                    <a href="#">
                      <img
                        className="contacts-list-img"
                        src="/img/default-profile.png"
                        alt="User Avatar"
                      />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          John K.
                          <small className="contacts-list-date float-right">
                            1/27/2015
                          </small>
                        </span>
                        <span className="contacts-list-msg">
                          Can I take a look at...
                        </span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                  <li>
                    <a href="#">
                      <img
                        className="contacts-list-img"
                        src="/img/default-profile.png"
                        alt="User Avatar"
                      />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Kenneth M.
                          <small className="contacts-list-date float-right">
                            1/4/2015
                          </small>
                        </span>
                        <span className="contacts-list-msg">
                          Never mind I found...
                        </span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                </ul>
                {/* /.contacts-list */}
              </div>
              {/* /.direct-chat-pane */}
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <form action="#" method="post">
                <div className="input-group">
                  <input
                    type="text"
                    name="message"
                    placeholder="Type Message ..."
                    className="form-control"
                  />
                  <span className="input-group-append">
                    <button type="button" className="btn btn-primary">
                      Send
                    </button>
                  </span>
                </div>
              </form>
            </div>
            {/* /.card-footer*/}
          </div>
          {/*/.direct-chat */}
        
        </section>
        {/* /.Left col */}
        {/* right col (We are only adding the ID to make the widgets sortable)*/}
        <section className="col-lg-5 connectedSortable">
        
         {/* TO DO List */}
         <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <i className="ion ion-clipboard mr-1" />
                To Do List
              </h3>
              <div className="card-tools">
                <ul className="pagination pagination-sm">
                  <li className="page-item">
                    <a href="#" className="page-link">
                      «
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      »
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <ul className="todo-list" data-widget="todo-list">
                <li>
                  {/* drag handle */}
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  {/* checkbox */}
                  <div className="icheck-primary d-inline ml-2">
                    <input
                      type="checkbox"
                      defaultValue=""
                      name="todo1"
                      id="todoCheck1"
                    />
                    <label htmlFor="todoCheck1" />
                  </div>
                  {/* todo text */}
                  <span className="text">Design a nice theme</span>
                  {/* Emphasis label */}
                  <small className="badge badge-danger">
                    <i className="far fa-clock" /> 2 mins
                  </small>
                  {/* General tools such as edit or delete*/}
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  <div className="icheck-primary d-inline ml-2">
                    <input
                      type="checkbox"
                      defaultValue=""
                      name="todo2"
                      id="todoCheck2"
                      //defaultChecked=""
                    />
                    <label htmlFor="todoCheck2" />
                  </div>
                  <span className="text">Make the theme responsive</span>
                  <small className="badge badge-info">
                    <i className="far fa-clock" /> 4 hours
                  </small>
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  <div className="icheck-primary d-inline ml-2">
                    <input
                      type="checkbox"
                      defaultValue=""
                      name="todo3"
                      id="todoCheck3"
                    />
                    <label htmlFor="todoCheck3" />
                  </div>
                  <span className="text">Let theme shine like a star</span>
                  <small className="badge badge-warning">
                    <i className="far fa-clock" /> 1 day
                  </small>
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  <div className="icheck-primary d-inline ml-2">
                    <input
                      type="checkbox"
                      defaultValue=""
                      name="todo4"
                      id="todoCheck4"
                    />
                    <label htmlFor="todoCheck4" />
                  </div>
                  <span className="text">Let theme shine like a star</span>
                  <small className="badge badge-success">
                    <i className="far fa-clock" /> 3 days
                  </small>
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  <div className="icheck-primary d-inline ml-2">
                    <input
                      type="checkbox"
                      defaultValue=""
                      name="todo5"
                      id="todoCheck5"
                    />
                    <label htmlFor="todoCheck5" />
                  </div>
                  <span className="text">
                    Check your messages & notifications
                  </span>
                  <small className="badge badge-primary">
                    <i className="far fa-clock" /> 1 week
                  </small>
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
                
              </ul>
            </div>
            {/* /.card-body */}
            <div className="card-footer clearfix">
              <button type="button" className="btn btn-primary float-right">
                <i className="fas fa-plus" /> Add item
              </button>
            </div>
          </div>
         
        
        </section>
        {/* right col */}
      </div>
    </div>
  );
};

export default Dashboard;
