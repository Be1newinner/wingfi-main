import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCorporateUser } from '../redux/selectors/userSelectors';
import { userCorporateRequest } from '../redux/reducers/usersReducer';

const Calendar = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectCorporateUser);

  useEffect(() => {
    dispatch(userCorporateRequest());
  }, [dispatch]);

  return (
    <div className='w-full flex justify-center'>
      <div className="overflow-x-auto w-[100%]">
        <div className="max-h-96 overflow-y-auto"> {/* Set a fixed height and enable scrolling */}
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Zip Code</th>
                <th className="px-4 py-2 border">Country</th>
                <th className="px-4 py-2 border">City</th>
                <th className="px-4 py-2 border">State</th>
                <th className="px-4 py-2 border">Industry</th>
                <th className="px-4 py-2 border">Company Name</th>
                <th className="px-4 py-2 border">Address 1</th>
                <th className="px-4 py-2 border">Phone Number</th>
                <th className="px-4 py-2 border">Website</th>
                <th className="px-4 py-2 border">Contact Person</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((data) => (
                <tr key={data.id}>
                  <td className="px-4 py-2 border">{data.id}</td>
                  <td className="px-4 py-2 border"><a href={`mailto:${data.email}`} target='_blank'>{data.email}</a></td>
                  <td className="px-4 py-2 border">{data.zipCode}</td>
                  <td className="px-4 py-2 border">{data.country}</td>
                  <td className="px-4 py-2 border">{data.city}</td>
                  <td className="px-4 py-2 border">{data.state || 'N/A'}</td>
                  <td className="px-4 py-2 border">{data.industry}</td>
                  <td className="px-4 py-2 border">{data.companyName}</td>
                  <td className="px-4 py-2 border">{data.address1}</td>
                  <td className="px-4 py-2 border"><a href={`tel:${data.phoneNumber}`}>{data.phoneNumber}</a></td>
                  <td className="px-4 py-2 border">{data.website}</td>
                  <td className="px-4 py-2 border">
                    {`${data.contactPersonFirstName} ${data.contactPersonSecondName || ''} ${data.contactPersonLastName}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
