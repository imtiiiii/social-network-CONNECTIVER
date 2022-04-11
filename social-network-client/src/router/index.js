import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import group from '@/components/group.vue'
import page from '@/components/page.vue'
import profile from '@/components/profile.vue'
import profilePhoto from '@/components/profilePhoto.vue'
import profileFriend from '@/components/profileFriend.vue'
import profileAbout from '@/components/profileAbout.vue'
import profileVideo from '@/components/profileVideo.vue'
import messenger from '@/components/messenger.vue'
import pageAbout from '@/components/pageAbout.vue'
import pageMedia from '@/components/pageMedia.vue'
import groupAbout from '@/components/groupAbout.vue'
import groupMedia from '@/components/groupMedia.vue'
import groupMember from '@/components/groupMember.vue'
import mobileMenu from '@/components/mobileMenu.vue'
import event from '@/components/event.vue'
import eventAbout from '@/components/eventAbout.vue'
import savedPage from '@/components/savedPage.vue'
import setting from '@/components/setting.vue'
import advertise from '@/components/advertise.vue'
import advertiseWallet from '@/components/advertiseWallet.vue'
import advertiseNewCampaign from '@/components/advertiseNewCampaign.vue'
import logIn from '@/components/logIn.vue'
import signUp from '@/components/signUp.vue'
import resetPassword from '@/components/resetPassword.vue'
import forgetPassword from '@/components/forgetPassword.vue'
import resendEmail from '@/components/resendEmail.vue'
import pageList from '@/components/pageList.vue'
import groupList from '@/components/groupList.vue'
import notificationPage from '@/components/notificationPage.vue'
import friReqList from '@/components/friReqList.vue'
import peopleList from '@/components/peopleList.vue'
import eventList from '@/components/eventList.vue'
import pageCreate from '@/components/pageCreate.vue'
import groupCreate from '@/components/groupCreate.vue'
import eventCreate from '@/components/eventCreate.vue'
import about from '@/components/about.vue'
import terms from '@/components/terms.vue'
import privacy from '@/components/privacy.vue'
import support from '@/components/support.vue'
import donate from '@/components/donate.vue'
import advertisingPolicies from '@/components/advertisingPolicies.vue'
import _404 from '@/components/404.vue'
import settingNew from '@/components/settingNew.vue'
import searchPage from '@/components/searchPage.vue'
import eventMedia from '@/components/eventMedia.vue'
import settingBasic from '@/components/settingBasic.vue'
import settingWork from '@/components/settingWork.vue'
import settingLoc from '@/components/settingLoc.vue'
import settingSocial from '@/components/settingSocial.vue'
import settingPass from '@/components/settingPass.vue'
import settingSession from '@/components/settingSession.vue'
import settingPrivacy from '@/components/settingPrivacy.vue'
import settingNoti from '@/components/settingNoti.vue'
import settingDelete from '@/components/settingDelete.vue'
import settingBlocking from '@/components/settingBlocking.vue'
import settingInformation from '@/components/settingInformation.vue'
import settingNewsfeed from '@/components/settingNewsfeed.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/page',
      name: 'page',
      component: page
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/profilePhoto',
      name: 'profilePhoto',
      component: profilePhoto
    },
    {
      path: '/profileFriend',
      name: 'profileFriend',
      component: profileFriend
    },
    {
      path: '/profileAbout',
      name: 'profileAbout',
      component: profileAbout
    },
    {
      path: '/profileVideo',
      name: 'profileVideo',
      component: profileVideo
    },
    {
      path: '/messenger',
      name: 'messenger',
      component: messenger
    },
    {
      path: '/pageAbout',
      name: 'pageAbout',
      component: pageAbout
    },
    {
      path: '/pageMedia',
      name: 'pageMedia',
      component: pageMedia
    },
    {
      path: '/groupAbout',
      name: 'groupAbout',
      component: groupAbout
    },
    {
      path: '/groupMedia',
      name: 'groupMedia',
      component: groupMedia
    },
    {
      path: '/groupMember',
      name: 'groupMember',
      component: groupMember
    },
    {
      path: '/mobileMenu',
      name: 'mobileMenu',
      component: mobileMenu
    },
    {
      path: '/event',
      name: 'event',
      component: event
    },
    {
      path: '/eventAbout',
      name: 'eventAbout',
      component: eventAbout
    },
    {
      path: '/savedPage',
      name: 'savedPage',
      component: savedPage
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/advertise',
      name: 'advertise',
      component: advertise
    },
    {
      path: '/advertiseWallet',
      name: 'advertiseWallet',
      component: advertiseWallet
    },
    {
      path: '/advertiseNewCampaign',
      name: 'advertiseNewCampaign',
      component: advertiseNewCampaign
    },
    {
      path: '/logIn',
      name: 'logIn',
      component: logIn
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/resetPassword',
      name: 'resetPassword',
      component: resetPassword
    },
    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: forgetPassword
    },
    {
      path: '/resendEmail',
      name: 'resendEmail',
      component: resendEmail
    },
    {
      path: '/pageList',
      name: 'pageList',
      component: pageList
    },
    {
      path: '/groupList',
      name: 'groupList',
      component: groupList
    },
    {
      path: '/notificationPage',
      name: 'notificationPage',
      component: notificationPage
    },
    {
      path: '/friReqList',
      name: 'friReqList',
      component: friReqList
    },
    {
      path: '/peopleList',
      name: 'peopleList',
      component: peopleList
    },
    {
      path: '/eventList',
      name: 'eventList',
      component: eventList
    },
    {
      path: '/pageCreate',
      name: 'pageCreate',
      component: pageCreate
    },
    {
      path: '/groupCreate',
      name: 'groupCreate',
      component: groupCreate
    },
    {
      path: '/eventCreate',
      name: 'eventCreate',
      component: eventCreate
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/terms',
      name: 'terms',
      component: terms
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: privacy
    },
    {
      path: '/support',
      name: 'support',
      component: support
    },
    {
      path: '/donate',
      name: 'donate',
      component: donate
    },
    {
      path: '/advertisingPolicies',
      name: 'advertisingPolicies',
      component: advertisingPolicies
    },
    {
      path: '/404',
      name: '404',
      component: _404
    },
    {
      path: '/settingNew',
      name: 'settingNew',
      component: settingNew
    },
    {
      path: '/searchPage',
      name: 'searchPage',
      component: searchPage
    },
    {
      path: '/eventMedia',
      name: 'eventMedia',
      component: eventMedia
    },
    {
      path: '/settingBasic',
      name: 'settingBasic',
      component: settingBasic
    },
    {
      path: '/settingWork',
      name: 'settingWork',
      component: settingWork
    },
    {
      path: '/settingLoc',
      name: 'settingLoc',
      component: settingLoc
    },
    {
      path: '/settingSocial',
      name: 'settingSocial',
      component: settingSocial
    },
    {
      path: '/settingPass',
      name: 'settingPass',
      component: settingPass
    },
    {
      path: '/settingSession',
      name: 'settingSession',
      component: settingSession
    },
    
    {
      path: '/settingPrivacy',
      name: 'settingPrivacy',
      component: settingPrivacy
    },
    {
      path: '/settingNoti',
      name: 'settingNoti',
      component: settingNoti
    },
    {
      path: '/settingDelete',
      name: 'settingDelete',
      component: settingDelete
    },
    {
      path: '/settingBlocking',
      name: 'settingBlocking',
      component: settingBlocking
    },
    {
      path: '/settingInformation',
      name: 'settingInformation',
      component: settingInformation
    },
    {
      path: '/settingNewsfeed',
      name: 'settingNewsfeed',
      component: settingNewsfeed
    },
    
   
  ]
})
