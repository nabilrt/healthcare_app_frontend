import React from 'react'
import SellerSideNav from "../inc/SellerSideNav"
import SellerTopNav from "../inc/SellerTopNav"
import SellerDash from "../seller/SellerDash";
import SellerProfile from "../seller/SellerProfile";
import SellerNotice from "../seller/SellerNotice";
import SellerEarnings from "../seller/SellerEarnings";
import OrderDetails from "../seller/OrderDetails";
import OrderHistory from "../seller/OrderHistory";
import UpdateOrder from "../seller/UpdateOrder";
import AddMedicine from "../seller/AddMedicine";
import ManageMedicines from "../seller/ManageMedicines";
import EditMedicine from "../seller/EditMedicine";
import DeleteMedicine from "../seller/DeleteMedicine";
import SearchMedicine from "../seller/SearchMedicine";

const test = (props) => {

    const component = () => {
        if (props.path === "dashboard") {
            return <SellerDash />;
        } else if (props.path === "profile") {
            return <SellerProfile />;
        }
        else if (props.path === "notices") {
            return <SellerNotice />;
        }
        else if (props.path === "earnings") {
            return <SellerEarnings />;
        }
        else if (props.path === "earning") {
            return <OrderDetails />;
        }
        else if (props.path === "order/history") {
            return <OrderHistory />;
        }
        else if (props.path === "order/update") {
            return <UpdateOrder />;
        }
        else if (props.path === "medicines/add") {
            return <AddMedicine />;
        }
        else if (props.path === "medicines/all") {
            return <ManageMedicines />;
        }
        else if (props.path === "medicine/update") {
            return <EditMedicine />;
        }
        else if (props.path === "medicine/delete") {
            return <DeleteMedicine />;
        }
        else if (props.path === "medicine/search") {
            return <SearchMedicine />;
        }



    };

    return (
        <div>
            <SellerTopNav />
            <div className="position-relative">
            </div>
            <div id="content-page" className="content-page">
                <div className="row">
                    <div className="col-4 col-md-2"><SellerSideNav/></div>
                    <div className="col-18 col-md-8">{component()}</div>
                </div>
            </div>
        </div>
    )
}
export default test;