import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome CSS
config.autoAddCss = false; // Disable auto CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faStar } from "@fortawesome/free-solid-svg-icons";
export default function Review(){
    return(
        <div id="sale" className=" max-w-screen-xl mx-auto mt-10 sm:pl-4 overflow-hidden">
            <div className=" ">
                {/* top container */}
                <div className=" flex justify-center items-center text-4xl font-extrabold font-Integral CF mt-4">
                    <h1 className="">OUR HAPPY CUSTOMERS</h1>
                </div>
                {/* Cards container */}
                {/* card-1 */}
                <div className="flex justify-center items-center gap-6 md:gap-12 overflow-x-auto scrollbar-none md:overflow-x-visible">
                    <div className="w-[350px] h-[200px] border rounded-2xl my-8 p-5 flex-shrink-0">
                           <div className='my-2 flex '>
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm " />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                           </div>
                        <div className="flex gap-2 mb-2">
                           <h2>Sarah M</h2> 
                          <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-green-500 text-xl"/>
                       </div>
                       <p className="text-sm font-normal">
                       &quot;I&#39;m blown away by the quality and style of the clothes I received from Shop.co.
                        From casual wear to elegant dresses,
                        every piece I&#39;ve bought has exceeded my expectations.&quot;
                       </p>
                        
                    </div>
                

                  {/* card-2 */}
                  
                    <div className="w-[350px] h-[200px] border rounded-2xl my-8 p-5 flex-shrink-0">
                           <div className='my-2 flex '>
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm " />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                           </div>
                        <div className="flex gap-2 mb-2">
                           <h2>Alex K.</h2> 
                          <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-green-500 text-xl"/>
                       </div>
                       <p className="text-sm font-normal">
                       &quot;Finding clothes that align with my personal style used to be a challenge 
                        until I discovered Shop.co. The range of options they offer is truly remarkable
                        of tastes and occasions.&quot;
                       </p>
                        
                    </div>
                

                  {/* card-3 */}
                  
                    <div className="w-[350px] h-[200px] border rounded-2xl my-8 p-5 flex-shrink-0">
                           <div className='my-2 flex '>
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm " />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                           </div>
                        <div className="flex gap-2 mb-2">
                           <h2>James L.</h2> 
                          <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-green-500 text-xl"/>
                       </div>
                       <p className="text-sm font-normal">
                       &quot;As someone who&#39;s always on the lookout for unique fashion pieces
                       I&#39;m thrilled to have stumbled upon Shop.co. The selection of clothes is not 
                        on-point with the latest trends.&quot;
                       </p>
                        
                    </div>
                
                </div>

          </div>
        </div>
    )
}