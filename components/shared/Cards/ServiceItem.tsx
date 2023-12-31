import React, { FC } from 'react';

interface ServiceItemProps {
  title: string;
  description: string;
  link: string;
  icon: React.ElementType
}

const ServiceItem: FC<ServiceItemProps> = ({ title, description, link, icon:Icon }) => {
  return (
    <div className="wpb_column column_container col-sm-6 col-md-4">
      <div className="column-inner">
        <div className="wpb_wrapper">
          <div className="service-box icon-box ionic hover-box">
            {/* Add your service icon here */}
            <Icon className="text-orange-600 text-[40px] mb-[20px]" />
            <div className="content-box">
              <h4>{title}</h4>
              <p>{description}</p>
              <a className="link-box pagelink" href={link} target="_self">Read more</a>
            </div>
          </div>
          <div className="empty_space_30"><span className="empty_space_inner"></span></div>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
