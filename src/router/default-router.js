import React from 'react'
import { Switch, Route } from 'react-router-dom'
//dashboard
import Restaurant from '../views/dashboard/restaurant';
import Admin from '../views/dashboard/admin'
// user
import UserProfile from '../views/dashboard/app/user-profile';
import UserAdd from '../views/dashboard/app/user-add';
import UserList from '../views/dashboard/app/user-list';
import userProfileEdit from '../views/dashboard/app/user-privacy-setting';
// widget
import Widgetbasic from '../views/dashboard/widget/widgetbasic';
import Widgetcard from '../views/dashboard/widget/widgetcard';
import Widgetchart from '../views/dashboard/widget/widgetchart';
// icon
import Solid from '../views/dashboard/icons/solid';
import Outline from '../views/dashboard/icons/outline';
import DualTone from '../views/dashboard/icons/dual-tone';
// Form
import FormElement from '../views/dashboard/from/form-element';
import FormValidation from '../views/dashboard/from/form-validation';
import FormWizard from '../views/dashboard/from/form-wizard';
// table
import BootstrapTable from '../views/dashboard/table/bootstrap-table';
import TableData from '../views/dashboard/table/table-data';

// map
import Vector from '../views/dashboard/maps/vector';
import Google from '../views/dashboard/maps/google';

//extra
import PrivacyPolicy from '../views/dashboard/extra/privacy-policy';
import TermsofService from '../views/dashboard/extra/terms-of-service';

//TransitionGroup
import { TransitionGroup, CSSTransition } from "react-transition-group";
//Special Pages
import DishDetails from '../views/dashboard/special-pages/dish-details';
import Menu from '../views/dashboard/special-pages/menu';
import CustomerReview from '../views/dashboard/special-pages/customer-review';
import RestaurantDetail from '../views/dashboard/special-pages/restaurant-detail';
import AddToCart from '../views/dashboard/special-pages/add-to-cart'
import OrderDetail from '../views/dashboard/special-pages/order-detail'
import OrderHistory from '../views/dashboard/special-pages/order-history'

//Ui-Elements
import Avatars from '../views/dashboard/ui-elements/avatars';
import Alerts from '../views/dashboard/ui-elements/alerts';
import Badges from '../views/dashboard/ui-elements/badges';
import Breadcrumb from '../views/dashboard/ui-elements/breadcrumb';
import Buttons from '../views/dashboard/ui-elements/buttons';
import ButtonGroups from '../views/dashboard/ui-elements/button-group';
import BoxShadow from '../views/dashboard/ui-elements/box-shadow';
import Colors from '../views/dashboard/ui-elements/colors';
import Cards from '../views/dashboard/ui-elements/cards';
import Carousel from '../views/dashboard/ui-elements/carousel';
import Grid from '../views/dashboard/ui-elements/grid';
import HelperClasses from '../views/dashboard/ui-elements/helper-classes';
import Images from '../views/dashboard/ui-elements/images';
import ListGroup from '../views/dashboard/ui-elements/list-group';
import Modals from '../views/dashboard/ui-elements/modal';
import Notifications from '../views/dashboard/ui-elements/notifications';
import Pagination from '../views/dashboard/ui-elements/pagination';
import Popovers from '../views/dashboard/ui-elements/popovers';
import Typography from '../views/dashboard/ui-elements/typography';
import Tabs from '../views/dashboard/ui-elements/tabs';
import Tooltips from '../views/dashboard/ui-elements/tooltip';
import Video from '../views/dashboard/ui-elements/video';

const DefaultRouter = () => {
    return (
        <TransitionGroup>
            <CSSTransition classNames="fadein" timeout={300}>
                <Switch>

                    {/* Dashboard */}
                    <Route path="/restaurant" component={Restaurant} />
                    <Route path="/admin" component={Admin} />

                    {/* user */}
                    <Route path="/app/user-profile" component={UserProfile} />
                    <Route path="/app/user-add" component={UserAdd} />
                    <Route path="/app/user-list" component={UserList} />
                    <Route path="/app/user-privacy-setting" component={userProfileEdit} />

                    {/* widget */}
                    <Route path="/widget/widgetbasic" component={Widgetbasic} />
                    <Route path="/widget/widgetcard" component={Widgetcard} />
                    <Route path="/widget/widgetchart" component={Widgetchart} />

                    {/* icon */}
                    <Route path="/icon/solid" component={Solid} />
                    <Route path="/icon/outline" component={Outline} />
                    <Route path="/icon/dual-tone" component={DualTone} />

                    {/* From */}
                    <Route path="/form/form-element" component={FormElement} />
                    <Route path="/form/form-validation" component={FormValidation} />
                    <Route path="/form/form-wizard" component={FormWizard} />

                    {/* table */}
                    <Route path="/table/bootstrap-table" component={BootstrapTable} />
                    <Route path="/table/table-data" component={TableData} />

                    {/*special pages */}
                    <Route path="/special-pages/dish-details" component={DishDetails} />
                    <Route path="/special-pages/menu" component={Menu} />
                    <Route path="/special-pages/customer-review" component={CustomerReview} />
                    <Route path="/special-pages/restaurant-detail" component={RestaurantDetail} />
                    <Route path="/special-pages/add-to-cart" component={AddToCart} />
                    <Route path="/special-pages/order-detail" component={OrderDetail} />
                    <Route path="/special-pages/order-history" component={OrderHistory} />

                    {/* map */}
                    <Route path="/map/vector" component={Vector} />
                    <Route path="/map/google" component={Google} />

                    {/* extra */}
                    <Route path="/extra/privacy-policy" component={PrivacyPolicy} />
                    <Route path="/extra/terms-of-service" component={TermsofService} />

                    {/*Ui-Element*/}
                    <Route path="/avatars" component={Avatars} />
                    <Route path="/alerts" component={Alerts} />
                    <Route path="/badges" component={Badges} />
                    <Route path="/breadcrumb" component={Breadcrumb} />
                    <Route path="/buttons" component={Buttons} />
                    <Route path="/button-group" component={ButtonGroups} />
                    <Route path="/box-shadow" component={BoxShadow} />
                    <Route path="/colors" component={Colors} />
                    <Route path="/cards" component={Cards} />
                    <Route path="/carousel" component={Carousel} />
                    <Route path="/grid" component={Grid} />
                    <Route path="/helper-classes" component={HelperClasses} />
                    <Route path="/images" component={Images} />
                    <Route path="/list-group" component={ListGroup} />
                    <Route path="/modal" component={Modals} />
                    <Route path="/notifications" component={Notifications} />
                    <Route path="/pagination" component={Pagination} />
                    <Route path="/popovers" component={Popovers} />
                    <Route path="/typography" component={Typography} />
                    <Route path="/tabs" component={Tabs} />
                    <Route path="/tooltips" component={Tooltips} />
                    <Route path="/video" component={Video} />

                    <Route path="/" component={Admin} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default DefaultRouter
