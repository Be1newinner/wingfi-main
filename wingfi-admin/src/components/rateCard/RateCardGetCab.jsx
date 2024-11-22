import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectRateCardGetCab } from '../../redux/selectors/rateCardSelectors';
import { rateCardRequest } from '../../redux/reducers/rateCardgetCab';

const RateCardGetCab = () => {
  const dispatch = useDispatch();
  const rateCardData = useSelector(selectRateCardGetCab);
  
  useEffect(() => {
    dispatch(rateCardRequest(rateCardData))
  }, [])
  return (
    <div className="w-full flex justify-center p-5 h-full overflow-scroll pb-[100px] no-scrollbar">RateCardGetCab</div>
  )
}

export default RateCardGetCab;