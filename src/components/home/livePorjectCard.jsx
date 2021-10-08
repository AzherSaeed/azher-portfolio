import React from 'react';


const LivePorjectCard = () => {

    function Bxl500pxIcon(props) {
        return (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
          >
            <path d="M7.379 14.791c.004.01.098.269.151.396.295.697.719 1.326 1.258 1.865a5.86 5.86 0 006.437 1.259 5.876 5.876 0 003.124-3.125 5.802 5.802 0 00.461-2.285c0-.793-.153-1.563-.461-2.287a5.862 5.862 0 00-1.257-1.864 5.86 5.86 0 00-4.152-1.72 6 6 0 00-2.318.461c-.57.241-1.536.862-2.102 1.446l-.002.002V4.107h8.117c.295-.003.295-.417.295-.55 0-.137 0-.549-.296-.553H7.857a.387.387 0 00-.388.384v6.801c0 .221.273.379.527.434.496.104.61-.053.732-.222l.015-.021c.187-.275.767-.858.771-.863a4.776 4.776 0 013.406-1.403 4.76 4.76 0 013.394 1.403 4.75 4.75 0 011.408 3.385c0 1.28-.498 2.483-1.4 3.385a4.858 4.858 0 01-3.416 1.403 4.656 4.656 0 01-2.42-.668l.004-4.137c0-.552.238-1.151.64-1.604a2.351 2.351 0 011.778-.803c.667 0 1.291.254 1.754.714.46.455.714 1.064.714 1.711a2.443 2.443 0 01-2.474 2.466c-.268 0-.753-.117-.773-.123-.281-.084-.4.305-.439.435-.151.492.077.59.122.604.448.138.741.164 1.124.164a3.555 3.555 0 003.551-3.553c0-1.943-1.592-3.526-3.548-3.526a3.59 3.59 0 00-2.536 1.033c-.644.632-1.013 1.478-1.013 2.317v.021c-.004.105-.004 2.583-.005 3.398l-.005-.006c-.368-.407-.731-1.029-.973-1.668-.097-.25-.309-.206-.601-.116-.127.04-.514.159-.429.438l.002.004zm4.172-.972c.002.118.111.223.175.286l.021.019c.111.11.217.164.315.164.081 0 .13-.037.148-.054.05-.046.604-.608.658-.662l.618.618c.058.064.12.097.192.098.1 0 .207-.058.32-.174.267-.272.134-.42.069-.49l-.628-.63.655-.658c.144-.155.017-.32-.111-.446-.183-.184-.359-.23-.474-.127l-.65.652-.657-.658a.183.183 0 00-.128-.051c-.087 0-.191.06-.308.177-.202.201-.246.341-.141.453l.657.656-.653.655a.247.247 0 00-.078.172m1.434-8.891c-1.053 0-2.171.211-2.992.566a.23.23 0 00-.151.205c-.011.093.013.216.076.377.051.131.187.478.449.376a7.566 7.566 0 012.618-.498c.96 0 1.892.188 2.768.558.696.296 1.354.721 2.068 1.341a.243.243 0 00.165.068c.138 0 .271-.137.386-.266.191-.214.321-.392.135-.569a7.674 7.674 0 00-2.354-1.52 8.088 8.088 0 00-3.168-.638m5.668 12.986c-.127-.126-.235-.199-.33-.228a.24.24 0 00-.247.059l-.063.062a7.07 7.07 0 01-5.018 2.081 7.09 7.09 0 01-5.02-2.081 6.794 6.794 0 01-1.521-2.255 7.618 7.618 0 01-.462-1.596c-.004-.018-.005-.031-.009-.041-.044-.232-.257-.249-.564-.202-.127.019-.517.078-.479.358l.002.006a8.104 8.104 0 002.288 4.478 8.089 8.089 0 002.59 1.747 8.093 8.093 0 003.175.642 8.062 8.062 0 003.172-.643 8.129 8.129 0 002.658-1.813c.083-.09.154-.248-.172-.574" />
          </svg>
        );
      }


    return (
        <div>
            <div style={{textAlign : 'center'}} >
            <h1>Live Projects</h1>
            </div>
            <div class="container mt-5 mb-3">
    <div class="row">
        <div class="col-md-4">
            <div class="card p-3 mb-2">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="icon"> <Bxl500pxIcon/> </div>
                        <div class="ms-2 c-details">
                            <h6 class="mb-0">SCS TELCOM</h6> <span>5 Month ago</span>
                        </div>
                    </div>
                    <div class="badge"> <span> <a href="http://scstelcom.onsets.co/" >Live Demo</a> </span> </div>
                </div>
                <div class="mt-5">
                <p class="heading">SCSTelecom'steam has been fulfilling the telephone systems needs of businesses in Houston and surrounding area with reliable and feature-rich systems.</p>
                    <div class="mt-5">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        {/* <div class="mt-3"> <span class="text1">32 Applied <span class="text2">of 50 capacity</span></span> </div> */}
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card p-3 mb-2">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                    <div class="icon"> <Bxl500pxIcon/> </div>
                        <div class="ms-2 c-details">
                            <h6 class="mb-0">Certijob</h6> <span>Under Deployment</span>
                        </div>
                    </div>
                    <div class="badge"> <span> <a href="https://certijob.herokuapp.com/" >Live Demo</a> </span> </div>
                </div>
                <div class="mt-5">
                <p class="heading">Certijob is the #1 job site in the world1 with over 250 million unique visitors every month. Certijob strives to put job seekers first, giving them free access to search for jobs, post CVs, and research companies.</p>
                    <div class="mt-5">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        {/* <div class="mt-3"> <span class="text1">42 Applied <span class="text2">of 70 capacity</span></span> </div> */}
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card p-3 mb-2">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                    <div class="icon"> <Bxl500pxIcon/> </div>
                        <div class="ms-2 c-details">
                            <h6 class="mb-0">LSM</h6> <span>2 Month ago</span>
                        </div>
                    </div>
                    <div class="badge"> <span> <a href="http://www.lsmlahore.edu.pk/" >Live Demo</a> </span> </div>
                </div>
                <div class="mt-5">
                    <p class="heading">The Lahore school of management is a forward looking institute operating under the umbrella of University of Education. It was established in Lahore.</p>
                    <div class="mt-5">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        {/* <div class="mt-3"> <span class="text1">52 Applied <span class="text2">of 100 capacity</span></span> </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}

export default LivePorjectCard
