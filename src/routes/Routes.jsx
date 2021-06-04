import Account from "../components/pages/Account";
import Main from "../components/pages/Main";
import Search from "../components/pages/Search";

 const routes= [
    {path :'/',
	component: Main
	},
	{ path :`/episode/:id`,
	component: Search
	},
	{ path :'/account',
	component: Account
	}
]
export default routes