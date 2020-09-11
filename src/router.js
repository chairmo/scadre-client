import Vue from 'vue'
import VueRouter from "vue-router";
import Auth from "@okta/okta-vue";

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
import Login from "@/components/Login";

import sampleConfig from './services/config';

Vue.use(Auth, sampleConfig.oidc);


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'home',
            path: '/',
            component: Home,
            // meta: { requiresAuth: true }
        },
        /*############## BIO-DATA ROUTES ###############*/
        {
            name: 'addStaff',
            path: '/staff/add',
            component: AddStaff,
            meta: { requiresAuth: true }
        },

        {
            name: 'editStaff',
            path: '/staff/edit/:id',
            component: EditStaff,
            meta: { requiresAuth: true }
        },
        {
            name: 'staffInfo',
            path: '/staff',
            component: StaffInfo,
            meta: { requiresAuth: true }
        },

        /*############### EMPLOYMENT ROUTES ##############*/
        {
            name: 'addEmployment',
            path: '/employment/add',
            component: AddEmployment,
            meta: { requiresAuth: true }
        },

        {
            name: 'editEmployment',
            path: '/employment/edit/:id',
            component: EditEmployment,
            meta: { requiresAuth: true }
        },
        {
            name: 'employmentInfo',
            path: '/employment',
            component: EmploymentInfo,
            meta: { requiresAuth: true }
        },

        /*####################### SERVICE HISTORY ROUTES ##################*/
        {
            name: 'addHistory',
            path: '/history/add',
            component: AddHistory,
            meta: { requiresAuth: true }
        },
        {
            name: 'editHistory',
            path: '/history/edit/:id',
            component: EditHistory,
            meta: { requiresAuth: true }
        },
        {
            name: 'historyInfo',
            path: '/history',
            component: HistoryInfo,
            meta: { requiresAuth: true }
        },

        /*###################### PROMOTIONS ROUTES ##########################*/
        {
            name: 'addPromotion',
            path: '/promotion/add',
            component: AddPromotion,
            meta: { requiresAuth: true }
        },
        {
            name: 'editPromotion',
            path: '/promotion/edit/:id',
            component: EditPromotion,
            meta: { requiresAuth: true }
        },
        {
            name: 'promotionInfo',
            path: '/promotion',
            component: PromotionInfo,
            meta: { requiresAuth: true }
        },

        /*########################## ACCOUNTS ROUTES ########################*/
        {
            name: 'addAccount',
            path: '/account/add',
            component: AddAccount,
            meta: { requiresAuth: true }
        },
        {
            name: 'editAccount',
            path: '/account/edit/:id',
            component: EditAccount,
            meta: { requiresAuth: true }
        },
        {
            name: 'accountInfo',
            path: '/account',
            component: AccountInfo,
            meta: { requiresAuth: true }
        },
        /*######################### EDUCATION ROUTES #########################*/
        {
            name: 'addEducation',
            path: '/education/add',
            component: AddEducation,
            meta: { requiresAuth: true }
        },
        {
            name: 'editEducation',
            path: '/education/edit/:id',
            component: EditEducation,
            meta: { requiresAuth: true }
        },
        {
            name: 'educationInfo',
            path: '/education',
            component: EducationInfo,
            meta: { requiresAuth: true }
        },

        /*######################### CERTIFICATION ROUTES ############################# */
        {
            name: 'addCertification',
            path: '/certification/add',
            component: AddCertification,
            meta: { requiresAuth: true }
        },
        {
            name: 'editCertification',
            path: '/certification/edit/:id',
            component: EditCertification,
            meta: { requiresAuth: true }
        },
        {
            name: 'certificationInfo',
            path: '/certification',
            component: CertificationInfo,
            meta: { requiresAuth: true }
        },

        /*############################## SKILLS ROUTES ####################################*/
        {
            name: 'addSkills',
            path: '/skills',
            component: AddSkills,
            meta: { requiresAuth: true }
        },

        /*############################## MEMBERSHIP ROUTES ##################################3*/
        {
            name: 'addMembership',
            path: '/membership/add',
            component: AddMembership,
            meta: { requiresAuth: true }
        },
        {
            name: 'editMembership',
            path: '/membership/edit/:id',
            component: EditMembership,
            meta: { requiresAuth: true }
        },
        {
            name: 'membershipInfo',
            path: '/membership',
            component: MembershipInfo,
            meta: { requiresAuth: true }
        },

        /*############################### NEXT OF KIN ROUTES ##############################*/
        {
            name: 'addNextOfKin',
            path: '/kin/add',
            component: AddNextOfKin,
            meta: { requiresAuth: true }
        },
        {
            name: 'editNextOfKin',
            path: '/kin/edit/:id',
            component: EditNextOfKin,
            meta: { requiresAuth: true }
        },
        {
            name: 'nextOfKinInfo',
            path: '/kin',
            component: NextOfKinInfo,
            meta: { requiresAuth: true }
        },

        /*############################### DOCUMENT UPLOAD ##############################*/

        {
            name: 'document',
            path: '/document',
            component: AddDocument,
            meta: { requiresAuth: true }
        },
        {
            path: '/callback',
            component: Auth.handleCallback(),
        }
    ]
});

const onAuthRequired = async (from, to, next) => {
    if (from.matched.some(record => record.meta.requiresAuth) && !(await Vue.prototype.$auth.isAuthenticated())){
        next({path: '/login'})
    } else {
        next()
    }
}
router.beforeEach(onAuthRequired);

export default router;