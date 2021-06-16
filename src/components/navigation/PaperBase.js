import { Navigation } from "./Navigation";
import { pageRouter } from "./controller/pageRouterController";


export const PaperBase=()=>{
    return(
        <main>
            <Navigation/>
            {pageRouter()}
        </main>
    )
}
export default PaperBase