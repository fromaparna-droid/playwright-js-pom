import {test as fixture} from '@playwright/test'
import HomePage from '../pages/homepage.js'
import WelcomePage from '../pages/welcomepage.js'
import BookAppointmentPage from '../pages/bookappointmentpage.js'

const test = fixture.extend({
    homepage: async ({page}, use) => {
        await use(new HomePage(page));
    },
    welcomepage: async ({page}, use) => {
        await use(new WelcomePage(page));
    },
    bookappointmentpage: async ({page}, use) => {
        await use(new BookAppointmentPage(page));
    }
})
export default test
