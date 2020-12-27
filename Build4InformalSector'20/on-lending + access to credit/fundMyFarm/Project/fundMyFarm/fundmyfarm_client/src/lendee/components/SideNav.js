import React, { useState } from "react";
import { Link, NavLink, useHistory, useRouteMatch } from "react-router-dom";

import "./SideNav.css";

const NavItems = [
  {
    title: "Dashboard",
    path: "overview",
    d:
      "M23.5033 11.1447L12.5988 0.248169C12.5203 0.1695 12.427 0.107087 12.3244 0.0645032C12.2217 0.0219193 12.1116 0 12.0005 0C11.8893 0 11.7793 0.0219193 11.6766 0.0645032C11.574 0.107087 11.4807 0.1695 11.4022 0.248169L0.497704 11.1447C0.180021 11.4624 0 11.8939 0 12.344C0 13.2785 0.759793 14.0383 1.69431 14.0383H2.84327V21.8136C2.84327 22.2822 3.22184 22.6607 3.69042 22.6607H10.3062V16.7306H13.2712V22.6607H20.3106C20.7792 22.6607 21.1577 22.2822 21.1577 21.8136V14.0383H22.3067C22.7567 14.0383 23.1883 13.8609 23.5059 13.5406C24.1651 12.8787 24.1651 11.8066 23.5033 11.1447Z",
    width: 24,
    height: 23,
  },
  {
    title: "Campaign",
    path: "campaign",
    d:
      "M22.56 13.84H7.57008L7.89024 13.3206C8.02752 13.0979 8.06784 12.8286 8.00208 12.5752L7.6896 11.3723L21.6014 10.6494C22.129 10.6226 22.56 10.168 22.56 9.64001V3.28C22.56 2.752 22.128 2.32 21.6 2.32H5.33712L5.14944 1.59856C5.09597 1.3928 4.97571 1.21061 4.80753 1.08056C4.63935 0.950515 4.43276 0.879975 4.22016 0.880005H0.96C0.705392 0.880005 0.461212 0.981147 0.281178 1.16118C0.101143 1.34122 0 1.5854 0 1.84C0 2.09461 0.101143 2.33879 0.281178 2.51883C0.461212 2.69886 0.705392 2.8 0.96 2.8H3.47808L6.04128 12.6616L5.03328 14.296C4.94362 14.4414 4.89443 14.6082 4.8908 14.779C4.88718 14.9498 4.92924 15.1184 5.01264 15.2675C5.0957 15.4168 5.21715 15.5412 5.36442 15.6278C5.51168 15.7143 5.67941 15.76 5.85024 15.76H22.56C22.8146 15.76 23.0588 15.6589 23.2388 15.4788C23.4189 15.2988 23.52 15.0546 23.52 14.8C23.52 14.5454 23.4189 14.3012 23.2388 14.1212C23.0588 13.9411 22.8146 13.84 22.56 13.84Z",
    opacity: 0.8,
    width: 24,
    height: 16,
  },
  {
    title: "History",
    path: "history",
    d:
      "M0 0.599998H24V15H23.1C23.1 12.852 21.348 11.1 19.2 11.1C17.628 11.1 16.296 12.048 15.672 13.392C15.372 13.272 15.048 13.2 14.7 13.2C13.524 13.2 12.54 13.956 12.168 15H0V0.599998ZM10.044 4.332C9.972 4.512 9.924 4.704 9.912 4.896C9.9 5.088 9.9 5.292 9.924 5.496L9.948 5.592C9.96 5.664 9.972 5.76 10.008 5.868C10.032 5.988 10.08 6.108 10.128 6.24C10.164 6.372 10.236 6.504 10.308 6.636C10.392 6.78 10.488 6.9 10.584 7.008C10.68 7.116 10.8 7.212 10.956 7.284C11.1 7.356 11.256 7.392 11.436 7.392C11.604 7.392 11.76 7.356 11.904 7.284C12.048 7.212 12.168 7.116 12.264 7.02C12.372 6.912 12.456 6.78 12.528 6.636C12.612 6.492 12.672 6.36 12.72 6.24C12.768 6.12 12.804 6 12.828 5.868C12.864 5.736 12.876 5.652 12.888 5.604C12.9 5.556 12.9 5.52 12.9 5.496C12.96 5.148 12.936 4.824 12.852 4.512C12.768 4.2 12.6 3.936 12.36 3.72C12.108 3.504 11.796 3.396 11.412 3.396C11.184 3.396 10.98 3.432 10.788 3.516C10.608 3.6 10.452 3.708 10.332 3.852C10.224 3.984 10.128 4.152 10.044 4.332ZM15.42 11.58V10.212C15.42 9.816 15.3 9.42 15.072 9.036C14.844 8.652 14.532 8.328 14.148 8.088C13.764 7.836 13.356 7.716 12.924 7.716L11.436 8.724L9.9 7.74C9.456 7.74 9.036 7.86 8.652 8.1C8.28 8.34 7.98 8.652 7.764 9.024C7.548 9.408 7.44 9.804 7.44 10.212V11.58L7.656 11.64C7.8 11.688 8.004 11.736 8.268 11.808C8.544 11.868 8.832 11.928 9.156 11.988C9.468 12.048 9.84 12.096 10.248 12.144C10.656 12.18 11.052 12.204 11.436 12.204C11.796 12.204 12.192 12.18 12.612 12.144C13.02 12.096 13.38 12.048 13.68 11.988C13.98 11.94 14.28 11.868 14.592 11.796L15.192 11.652C15.288 11.628 15.36 11.604 15.42 11.58ZM19.2 11.7C21.024 11.7 22.5 13.176 22.5 15C22.5 16.824 21.024 18.3 19.2 18.3C18.324 18.3 17.544 17.94 16.956 17.376C17.347 16.785 17.4882 16.0633 17.3488 15.3685C17.2094 14.6738 16.8007 14.0624 16.212 13.668C16.728 12.516 17.856 11.7 19.2 11.7ZM12.6 15.9C12.6 14.748 13.548 13.8 14.7 13.8C15.852 13.8 16.8 14.748 16.8 15.9C16.8 17.052 15.852 18 14.7 18C13.548 18 12.6 17.052 12.6 15.9Z",
    opacity: 0.8,
    width: 24,
    height: 19,
  },
  {
    title: "Settings",
    path: "settings",
    d:
      "M10.0117 8.1547C9.31095 8.1547 8.6547 8.42657 8.15782 8.92344C7.66329 9.42032 7.38907 10.0766 7.38907 10.7774C7.38907 11.4781 7.66329 12.1344 8.15782 12.6313C8.6547 13.1258 9.31095 13.4 10.0117 13.4C10.7125 13.4 11.3688 13.1258 11.8656 12.6313C12.3602 12.1344 12.6344 11.4781 12.6344 10.7774C12.6344 10.0766 12.3602 9.42032 11.8656 8.92344C11.6229 8.67889 11.3341 8.485 11.0158 8.35303C10.6976 8.22106 10.3563 8.15364 10.0117 8.1547ZM19.675 13.6742L18.1422 12.3641C18.2149 11.9188 18.2524 11.4641 18.2524 11.0117C18.2524 10.5594 18.2149 10.1024 18.1422 9.65938L19.675 8.34923C19.7908 8.2501 19.8737 8.11808 19.9126 7.97071C19.9515 7.82334 19.9447 7.66761 19.893 7.52423L19.8719 7.46329C19.45 6.28366 18.818 5.19022 18.0063 4.23594L17.9641 4.18673C17.8655 4.07083 17.7341 3.98752 17.5873 3.94778C17.4404 3.90803 17.285 3.91371 17.1414 3.96407L15.2383 4.64141C14.5352 4.06485 13.7524 3.61016 12.9039 3.29376L12.5359 1.30391C12.5082 1.15401 12.4355 1.01611 12.3275 0.908517C12.2195 0.800928 12.0813 0.728749 11.9313 0.701569L11.868 0.689851C10.6492 0.469538 9.36485 0.469538 8.1461 0.689851L8.08282 0.701569C7.93282 0.728749 7.79463 0.800928 7.68662 0.908517C7.57861 1.01611 7.5059 1.15401 7.47814 1.30391L7.10782 3.30313C6.26742 3.62206 5.48453 4.07565 4.78986 4.6461L2.87267 3.96407C2.72915 3.91331 2.57358 3.90742 2.42664 3.94719C2.2797 3.98696 2.14834 4.07051 2.05001 4.18673L2.00782 4.23594C1.19757 5.19123 0.565647 6.2844 0.142199 7.46329L0.121105 7.52423C0.0156363 7.8172 0.102355 8.14532 0.339074 8.34923L1.89064 9.67345C1.81798 10.1141 1.78282 10.5641 1.78282 11.0094C1.78282 11.4594 1.81798 11.9094 1.89064 12.3453L0.343761 13.6695C0.22797 13.7687 0.145097 13.9007 0.106161 14.0481C0.0672258 14.1954 0.0740729 14.3512 0.125792 14.4945L0.146886 14.5555C0.571105 15.7344 1.19689 16.8242 2.01251 17.7828L2.0547 17.832C2.15326 17.9479 2.28463 18.0312 2.43148 18.071C2.57834 18.1107 2.73379 18.1051 2.87735 18.0547L4.79454 17.3727C5.49298 17.9469 6.2711 18.4016 7.11251 18.7156L7.48282 20.7149C7.51059 20.8648 7.5833 21.0027 7.69131 21.1102C7.79932 21.2178 7.9375 21.29 8.08751 21.3172L8.15079 21.3289C9.38153 21.5504 10.6419 21.5504 11.8727 21.3289L11.9359 21.3172C12.086 21.29 12.2241 21.2178 12.3322 21.1102C12.4402 21.0027 12.5129 20.8648 12.5406 20.7149L12.9086 18.725C13.757 18.4063 14.5399 17.9539 15.243 17.3774L17.1461 18.0547C17.2896 18.1055 17.4452 18.1113 17.5921 18.0716C17.7391 18.0318 17.8704 17.9483 17.9688 17.832L18.0109 17.7828C18.8266 16.8195 19.4524 15.7344 19.8766 14.5555L19.8977 14.4945C19.9984 14.2039 19.9117 13.8781 19.675 13.6742ZM10.0117 14.8977C7.73595 14.8977 5.89142 13.0531 5.89142 10.7774C5.89142 8.50157 7.73595 6.65704 10.0117 6.65704C12.2875 6.65704 14.132 8.50157 14.132 10.7774C14.132 13.0531 12.2875 14.8977 10.0117 14.8977Z",
    opacity: 0.8,
    width: 20,
    height: 22,
  },
];

function SideNav({ avatar, name }) {
  return (
    <div className="d-flex justify-content-between pr-0" id="sidenav">
      <div className="sidebar-top">
        <div className="logo mb-4 text-center ">
          <img src={avatar} alt="investor img" />
          <h2 className="investor-name">{name}</h2>
          <p className="role-tag">Farmer</p>
        </div>
        <ul className="sidenav-items">
          {NavItems.map((item, index) => {
            return (
              <NavLink
                to={`/lendee/${item.path}`}
                activeClassName="active-menu"
              >
                <li key={item.path} className="mb-3">
                  <button
                    className={`btn d-flex sidenav-item w-100`}
                    type="button"
                  >
                    <svg
                      width={`${item.width}`}
                      height={`${item.height}`}
                      viewBox={`0 0 ${item.width} ${item.height}`}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={item.d} opacity={item.opacity && item.opacity} />
                    </svg>

                    <span className="nav-item-title d-md-block">
                      {item.title}
                    </span>
                  </button>
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>

      <div>
        <button
          className={`btn d-flex bottom-sidenav-item w-100`}
          type="button"
        >
          <svg
            width="14"
            height="20"
            viewBox="0 0 14 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V10L5 6V9H11V11H5V14L0 10V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H13C13.2652 20 13.5196 19.8946 13.7071 19.7071C13.8946 19.5196 14 19.2652 14 19V1C14 0.734784 13.8946 0.48043 13.7071 0.292893C13.5196 0.105357 13.2652 0 13 0Z"
              fill="black"
              fill-opacity="0.8"
            />
          </svg>

          <span className="nav-item-title d-md-block">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default SideNav;
