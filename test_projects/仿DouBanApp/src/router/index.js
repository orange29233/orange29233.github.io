import Vue from 'vue'
import Router from 'vue-router'

import home from "@/components/home"
import subject from "@/components/subject"
import status from "@/components/status"
import group from "@/components/group"
import profile from "@/components/profile"

import movie from "@/components/subject/movie"
import read from "@/components/subject/read"
import tv from "@/components/subject/tv"
import city from "@/components/subject/city"
import music from "@/components/subject/music"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/subject',
      name: 'subject',
      component: subject,
      children:[
      	{
		  		path: '',
		      name: 'movie',
		      component: movie,
	      },
	      {
		  		path: 'movie',
		      name: 'movie',
		      component: movie,
	      },
	      {
		  		path: 'read',
		      name: 'read',
		      component: read,
	      },
	      {
		  		path: 'tv',
		      name: 'tv',
		      component: tv,
	      },
	      {
		  		path: 'city',
		      name: 'city',
		      component: city,
	      },
	      {
		  		path: 'music',
		      name: 'music',
		      component: music,
	      },
      ]
    },
    {
      path: '/status',
      name: 'status',
      component: status
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    
  ]
})
