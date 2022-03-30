import { Outlet, Link } from "react-router-dom";

export const Sidebar = () => {
	var Login = 1
  return (
    <>
    <div>
    <div id="main-wrapper">
	

      
  <div className="nav-header">
    <a href="#" className="brand-logo">
      <svg
        className="logo-abbr"
        width={60}
        height={60}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className="react-logo"
          width={60}
          height={60}
          rx={30}
          fill="#00A15D"
        />
        <mask
          id="mask0"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={60}
          height={60}
        >
          <rect
            className="react-logo"
            width={60}
            height={60}
            rx={30}
            fill="#00A15D"
          />
        </mask>
        <g mask="url(#mask0)">
          <path
            d="M130 51.3929L126.5 45.2109C123 38.9626 116 26.6981 109 23.1017C102 19.5715 95 24.875 88 29.3002C81 33.6591 74 37.3053 67 39.0124C60 40.7857 53 40.7857 46 36.3606C39 32.0017 32 23.0519 25 17.7981C18 12.4448 11 10.7874 4 16.9197C-3 23.0519 -10 37.3053 -17 40.7857C-24 44.2662 -31 37.3053 -34.5 33.7088L-38 30.1786V62H-34.5C-31 62 -24 62 -17 62C-10 62 -3 62 4 62C11 62 18 62 25 62C32 62 39 62 46 62C53 62 60 62 67 62C74 62 81 62 88 62C95 62 102 62 109 62C116 62 123 62 126.5 62H130V51.3929Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M-54 55.7741L-50.5 50.9799C-47 46.1343 -40 36.623 -33 33.8339C-26 31.0962 -19 35.2092 -12 38.641C-5 42.0213 2 44.849 9 46.1728C16 47.5481 23 47.5481 30 44.1164C37 40.736 44 33.7954 51 29.721C58 25.5694 65 24.2841 72 29.0398C79 33.7954 86 44.849 93 47.5481C100 50.2473 107 44.849 110.5 42.0599L114 39.3222V64H110.5C107 64 100 64 93 64C86 64 79 64 72 64C65 64 58 64 51 64C44 64 37 64 30 64C23 64 16 64 9 64C2 64 -5 64 -12 64C-19 64 -26 64 -33 64C-40 64 -47 64 -50.5 64H-54V55.7741Z"
            fill="url(#paint1_linear)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1={46}
            y1={13}
            x2={46}
            y2={62}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#23D58A" />
            <stop offset={1} stopColor="#00A15D" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1={30}
            y1={26}
            x2={30}
            y2={64}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#FFED4B" />
            <stop offset={1} stopColor="#FF8C4B" />
          </linearGradient>
        </defs>
      </svg>
      <div className="brand-title">
        <div className="dashboard_bar">PMS</div>
        <span className="brand-sub-title">Project Management Sytem</span>
      </div>
    </a>
    <div className="nav-control">
      <div className="hamburger">
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </div>
    </div>
  </div>
  
  
  <div className="dlabnav">
    <div className="dlabnav-scroll">
      <ul className="metismenu" id="menu">
       
       
        <li>
          <a><i className="fas fa-user-check" />
            <Link className="nav-text" to="/Home">Home</Link>
			</a>
        </li>
        <li>
          <a><i className="fas fa-user-check" />
            <Link className="nav-text" to="/Table">Table</Link>
		    	</a>
        </li>
        <li>
          <a><i className="fas fa-user-check" />
            <Link className="nav-text" to="/Login1">Login1</Link>
		    	</a>
        </li>
        
		    <li>
          <a><i className="fas fa-user-check" /> 
            <Link className="nav-text" to="/Login">Login</Link>
			    </a>
        </li>
        <li>
          <a><i className="fas fa-user-check" />
            <Link className="nav-text" to="/Login1">Login1</Link>
			    </a>
        </li>
        <li><a class="has-arrow " href="javascript:void()" aria-expanded="false">
							<i class="fas fa-chart-line"></i>
							<span class="nav-text">User</span>
						</a>
						<ul aria-expanded="false">
							<li><Link className="nav-text" to="/AddUser">Add User</Link></li>
              
							<li><a href="chart-morris.html">User List</a></li>
							
						</ul>
				</li>
        <li><a class="has-arrow " href="javascript:void()" aria-expanded="false">
							<i class="fas fa-chart-line"></i>
							<span class="nav-text">Project</span>
						</a>
						<ul aria-expanded="false">
							<li><Link className="nav-text" to="/AddUser">Add Project</Link></li>
              
							<li><a href="chart-morris.html">Project List</a></li>
							
						</ul>
				</li>
        <li>
          <a  className="" aria-expanded="false">
            <i className="fas fa-user-check" />
            <Link className="nav-text" to="/Form">Form</Link>
          </a>
        </li>
        <li>
          <a  className="" aria-expanded="false">
            <i className="fas fa-user-check" />
            <Link className="nav-text" to="/Form1">Form1</Link>
          </a>
        </li>


        
        
      </ul>
     
      <div className="copyright">
        <p>
          <strong>Project Management System</strong> © 2022 All Rights
          Reserved{" "}
        </p>
        <p className="fs-12">
          Made with by Frontendtrick{" "}
        </p>
      </div>
    </div>
  </div>
 
  
</div>
</div>
 
<Outlet />
    </>

   
  )
}