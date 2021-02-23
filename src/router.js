import Vue from 'vue'
import VueRouter from "vue-router";

import AddEducation from "@/components/education/AddEducation";
import EducationInfo from "@/components/education/EducationInfo";
import EditEducation from "@/components/education/EditEducation";

import AddStaff from "@/components/biodata/AddStaff";
import EditStaff from "@/components/biodata/EditStaff";
import StaffInfo from "@/components/biodata/StaffInfo";

import AddEmployment from "@/components/employment/AddEmployment";
import EditEmployment from "@/components/employment/EditEmployment";
import EmploymentInfo from "@/components/employment/EmploymentInfo";

import Home from "@/components/views/Home";

import AddHistory from "@/components/history/AddHistory";
import EditHistory from "@/components/history/EditHistory";
import HistoryInfo from "@/components/history/HistoryInfo";

import AddAccount from "@/components/account/AddAccount";
import EditAccount from "@/components/account/EditAccount";
import AccountInfo from "@/components/account/AccountInfo";

import PromotionInfo from "@/components/promotion/PromotionInfo";
import EditPromotion from "@/components/promotion/EditPromotion";
import AddPromotion from "@/components/promotion/AddPromotion";

import AddCertification from "@/components/certification/AddCertification";
import EditCertification from "@/components/certification/EditCertification";
import CertificationInfo from "@/components/certification/CertificationInfo";

import AddSkills from "@/components/skill/AddSkills";

import AddMembership from "@/components/membership/AddMembership";
import EditMembership from "@/components/membership/EditMembership";
import MembershipInfo from "@/components/membership/MembershipInfo";

import AddNextOfKin from "@/components/kin/AddNextOfKin";
import EditNextOfKin from "@/components/kin/EditNextOfKin";
import NextOfKinInfo from "@/components/kin/NextOfKinInfo";
import AddDocument from "@/components/document/AddDocument";

import SummaryReport from "@/components/queries/SummaryReport";
import Login from "@/components/user/Login";
import Register from "@/components/user/Register";
import LandingPage from "@/components/views/LandingPage";
import ForgotPassword from "@/components/user/ForgotPassword";
import RegisterSuccess from "@/components/user/RegisterSuccess";
import ActivationEmail from "@/components/user/SendActivationEmail";
import VerifyEmail from "@/components/user/VerifyEmail";
import ChangePassword from "@/components/user/ChangePassword";



Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        /*############## PUBLIC ROUTES ###############*/
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'forgotPassword',
            path: '/forgotPassword',
            component: ForgotPassword
        },
        {
            name: 'register',
            path: '/register',
            component: Register
        },
        {
            name: 'activation',
            path: '/activation',
            component: ActivationEmail
        },
        {
            name: 'success',
            path: '/success',
            component: RegisterSuccess
        },
        {
            name: 'landingPage',
            path: '/',
            component: LandingPage
        },
        {
            name: 'verify',
            path: '/verify',
            component: VerifyEmail
        },
        {
            name: 'changePassword',
            path: '/changePassword',
            component: ChangePassword
        },
        /*############## HOME ROUTES ###############*/
        {
            name: 'home',
            path: '/home',
            component: Home
        },
        /*############## BIO-DATA ROUTES ###############*/
        {
            name: 'addStaff',
            path: '/staff/add',
            component: AddStaff
        },

        {
            name: 'editStaff',
            path: '/staff/edit/:id',
            component: EditStaff
        },
        {
            name: 'staffInfo',
            path: '/staff',
            component: StaffInfo
        },

        /*############### EMPLOYMENT ROUTES ##############*/
        {
            name: 'addEmployment',
            path: '/employment/add',
            component: AddEmployment
        },

        {
            name: 'editEmployment',
            path: '/employment/edit/:id',
            component: EditEmployment
        },
        {
            name: 'employmentInfo',
            path: '/employment',
            component: EmploymentInfo
        },

        /*####################### SERVICE HISTORY ROUTES ##################*/
        {
            name: 'addHistory',
            path: '/history/add',
            component: AddHistory
        },
        {
            name: 'editHistory',
            path: '/history/edit/:id',
            component: EditHistory
        },
        {
            name: 'historyInfo',
            path: '/history',
            component: HistoryInfo
        },

        /*###################### PROMOTIONS ROUTES ##########################*/
        {
            name: 'addPromotion',
            path: '/promotion/add',
            component: AddPromotion
        },
        {
            name: 'editPromotion',
            path: '/promotion/edit/:id',
            component: EditPromotion
        },
        {
            name: 'promotionInfo',
            path: '/promotion',
            component: PromotionInfo
        },

        /*########################## ACCOUNTS ROUTES ########################*/
        {
            name: 'addAccount',
            path: '/account/add',
            component: AddAccount
        },
        {
            name: 'editAccount',
            path: '/account/edit/:id',
            component: EditAccount
        },
        {
            name: 'accountInfo',
            path: '/account',
            component: AccountInfo
        },
        /*######################### EDUCATION ROUTES #########################*/
        {
            name: 'addEducation',
            path: '/education/add',
            component: AddEducation
        },
        {
            name: 'editEducation',
            path: '/education/edit/:id',
            component: EditEducation
        },
        {
            name: 'educationInfo',
            path: '/education',
            component: EducationInfo
        },

        /*######################### CERTIFICATION ROUTES ############################# */
        {
            name: 'addCertification',
            path: '/certification/add',
            component: AddCertification
        },
        {
            name: 'editCertification',
            path: '/certification/edit/:id',
            component: EditCertification
        },
        {
            name: 'certificationInfo',
            path: '/certification',
            component: CertificationInfo
        },

        /*############################## SKILLS ROUTES ####################################*/
        {
            name: 'addSkills',
            path: '/skills',
            component: AddSkills
        },

        /*############################## MEMBERSHIP ROUTES ##################################3*/
        {
            name: 'addMembership',
            path: '/membership/add',
            component: AddMembership
        },
        {
            name: 'editMembership',
            path: '/membership/edit/:id',
            component: EditMembership
        },
        {
            name: 'membershipInfo',
            path: '/membership',
            component: MembershipInfo
        },

        /*############################### NEXT OF KIN ROUTES ##############################*/
        {
            name: 'addNextOfKin',
            path: '/kin/add',
            component: AddNextOfKin,
        },
        {
            name: 'editNextOfKin',
            path: '/kin/edit/:id',
            component: EditNextOfKin,
        },
        {
            name: 'nextOfKinInfo',
            path: '/kin',
            component: NextOfKinInfo,
        },

        /*############################### DOCUMENT UPLOAD ##############################*/

        {
            name: 'document',
            path: '/document',
            component: AddDocument,
        },
        {
            name: 'summaryReport',
            path: '/report',
            component: SummaryReport,
        },
    ]
});


router.beforeEach((to, from, next) => {
  const publicPages = ['/','/login', '/register', '/verify', '/activation', '/success',
      '/forgotPassword', '/changePassword'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/');
  } else {
    next();
  }
});

export default router;