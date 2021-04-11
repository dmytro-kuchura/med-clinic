import React from 'react';
import {Link} from 'react-router-dom';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <main>
                <div className="container-fluid">
                    <h1 className="mt-4">Панель администрирования</h1>
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-primary text-white mb-4">
                                <div className="card-body">Список пацієнтів</div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <Link to={'/patients'} className="small text-white stretched-link">
                                        Перегляд
                                    </Link>
                                    <div className="small text-white"><i className="fas fa-angle-right"/></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-success text-white mb-4">
                                <div className="card-body">Список лікарів</div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <Link to={'/doctors'} className="small text-white stretched-link">
                                        Перегляд
                                    </Link>
                                    <div className="small text-white"><i className="fas fa-angle-right"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="card mb-4">*/}
                    {/*    <div className="card-header"><i className="fas fa-table mr-1"></i>Последние статьи</div>*/}
                    {/*    <div className="card-body">*/}
                    {/*        <div className="table-responsive">*/}
                    {/*            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">*/}
                    {/*                <thead>*/}
                    {/*                <tr>*/}
                    {/*                    <th>Name</th>*/}
                    {/*                    <th>Position</th>*/}
                    {/*                    <th>Office</th>*/}
                    {/*                    <th>Age</th>*/}
                    {/*                    <th>Start date</th>*/}
                    {/*                    <th>Salary</th>*/}
                    {/*                </tr>*/}
                    {/*                </thead>*/}
                    {/*                <tfoot>*/}
                    {/*                <tr>*/}
                    {/*                    <th>Name</th>*/}
                    {/*                    <th>Position</th>*/}
                    {/*                    <th>Office</th>*/}
                    {/*                    <th>Age</th>*/}
                    {/*                    <th>Start date</th>*/}
                    {/*                    <th>Salary</th>*/}
                    {/*                </tr>*/}
                    {/*                </tfoot>*/}
                    {/*                <tbody>*/}
                    {/*                <tr>*/}
                    {/*                    <td>Tiger Nixon</td>*/}
                    {/*                    <td>System Architect</td>*/}
                    {/*                    <td>Edinburgh</td>*/}
                    {/*                    <td>61</td>*/}
                    {/*                    <td>2011/04/25</td>*/}
                    {/*                    <td>$320,800</td>*/}
                    {/*                </tr>*/}
                    {/*                <tr>*/}
                    {/*                    <td>Garrett Winters</td>*/}
                    {/*                    <td>Accountant</td>*/}
                    {/*                    <td>Tokyo</td>*/}
                    {/*                    <td>63</td>*/}
                    {/*                    <td>2011/07/25</td>*/}
                    {/*                    <td>$170,750</td>*/}
                    {/*                </tr>*/}
                    {/*                <tr>*/}
                    {/*                    <td>Ashton Cox</td>*/}
                    {/*                    <td>Junior Technical Author</td>*/}
                    {/*                    <td>San Francisco</td>*/}
                    {/*                    <td>66</td>*/}
                    {/*                    <td>2009/01/12</td>*/}
                    {/*                    <td>$86,000</td>*/}
                    {/*                </tr>*/}
                    {/*                <tr>*/}
                    {/*                    <td>Cedric Kelly</td>*/}
                    {/*                    <td>Senior Javascript Developer</td>*/}
                    {/*                    <td>Edinburgh</td>*/}
                    {/*                    <td>22</td>*/}
                    {/*                    <td>2012/03/29</td>*/}
                    {/*                    <td>$433,060</td>*/}
                    {/*                </tr>*/}
                    {/*                <tr>*/}
                    {/*                    <td>Airi Satou</td>*/}
                    {/*                    <td>Accountant</td>*/}
                    {/*                    <td>Tokyo</td>*/}
                    {/*                    <td>33</td>*/}
                    {/*                    <td>2008/11/28</td>*/}
                    {/*                    <td>$162,700</td>*/}
                    {/*                </tr>*/}
                    {/*                <tr>*/}
                    {/*                    <td>Brielle Williamson</td>*/}
                    {/*                    <td>Integration Specialist</td>*/}
                    {/*                    <td>New York</td>*/}
                    {/*                    <td>61</td>*/}
                    {/*                    <td>2012/12/02</td>*/}
                    {/*                    <td>$372,000</td>*/}
                    {/*                </tr>*/}
                    {/*                <tr>*/}
                    {/*                    <td>Herrod Chandler</td>*/}
                    {/*                    <td>Sales Assistant</td>*/}
                    {/*                    <td>San Francisco</td>*/}
                    {/*                    <td>59</td>*/}
                    {/*                    <td>2012/08/06</td>*/}
                    {/*                    <td>$137,500</td>*/}
                    {/*                </tr>*/}
                    {/*                <tr>*/}
                    {/*                    <td>Rhona Davidson</td>*/}
                    {/*                    <td>Integration Specialist</td>*/}
                    {/*                    <td>Tokyo</td>*/}
                    {/*                    <td>55</td>*/}
                    {/*                    <td>2010/10/14</td>*/}
                    {/*                    <td>$327,900</td>*/}
                    {/*                </tr>*/}
                    {/*                <tr>*/}
                    {/*                    <td>Colleen Hurst</td>*/}
                    {/*                    <td>Javascript Developer</td>*/}
                    {/*                    <td>San Francisco</td>*/}
                    {/*                    <td>39</td>*/}
                    {/*                    <td>2009/09/15</td>*/}
                    {/*                    <td>$205,500</td>*/}
                    {/*                </tr>*/}
                    {/*                <tr>*/}
                    {/*                    <td>Sonya Frost</td>*/}
                    {/*                    <td>Software Engineer</td>*/}
                    {/*                    <td>Edinburgh</td>*/}
                    {/*                    <td>23</td>*/}
                    {/*                    <td>2008/12/13</td>*/}
                    {/*                    <td>$103,600</td>*/}
                    {/*                </tr>*/}
                    {/*                <tr>*/}
                    {/*                    <td>Jena Gaines</td>*/}
                    {/*                    <td>Office Manager</td>*/}
                    {/*                    <td>London</td>*/}
                    {/*                    <td>30</td>*/}
                    {/*                    <td>2008/12/19</td>*/}
                    {/*                    <td>$90,560</td>*/}
                    {/*                </tr>*/}
                    {/*                <tr>*/}
                    {/*                    <td>Quinn Flynn</td>*/}
                    {/*                    <td>Support Lead</td>*/}
                    {/*                    <td>Edinburgh</td>*/}
                    {/*                    <td>22</td>*/}
                    {/*                    <td>2013/03/03</td>*/}
                    {/*                    <td>$342,000</td>*/}
                    {/*                </tr>*/}
                    {/*                <tr>*/}
                    {/*                    <td>Charde Marshall</td>*/}
                    {/*                    <td>Regional Director</td>*/}
                    {/*                    <td>San Francisco</td>*/}
                    {/*                    <td>36</td>*/}
                    {/*                    <td>2008/10/16</td>*/}
                    {/*                    <td>$470,600</td>*/}
                    {/*                </tr>*/}
                    {/*                <tr>*/}
                    {/*                    <td>Haley Kennedy</td>*/}
                    {/*                    <td>Senior Marketing Designer</td>*/}
                    {/*                    <td>London</td>*/}
                    {/*                    <td>43</td>*/}
                    {/*                    <td>2012/12/18</td>*/}
                    {/*                    <td>$313,500</td>*/}
                    {/*                </tr>*/}
                    {/*                </tbody>*/}
                    {/*            </table>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </main>
        );
    }
}

export default Dashboard;
