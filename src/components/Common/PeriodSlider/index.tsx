
import * as S from "./style";
import DynamicBounds from 'rc-slider';
import './rc-slider.css'

interface PeriodSliderType {
  handlePersonalType: (type: number) => void
}

const PeriodSlider = ({handlePersonalType}: PeriodSliderType) => {
  return (
    <S.PeriodSliderContainer>
      심자 시간 선택
      <p>주의 : 심자 2 신청 시 심자 1 또한 필수 참석해야 합니다. 또한 9시 50분부터는 정비시간입니다.</p>
      <S.PeriodSliderContent>
        <S.PeriodIndicator>
          <S.PeriodText>
            <p>심자1</p>
            <span>9:50까지</span>
          </S.PeriodText>
          <S.PeriodText>
            <p>심자2</p>
            <span>11:50까지</span>
          </S.PeriodText>
          <S.PeriodText>
            <p>심자3</p>
            <span>12:30까지</span>
          </S.PeriodText>
        </S.PeriodIndicator>
        <DynamicBounds dots min={1} max={3} onChange={(value) => handlePersonalType(value as number)}/>
      </S.PeriodSliderContent>
    </S.PeriodSliderContainer>
  )
}
export default PeriodSlider