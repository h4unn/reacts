# State vs Ref

- State 와 Ref 의 큰 차이점은 값이 바뀔 때 rerendering 의 차이점에 있다
- Ref를 사용해야 할 떄는
  UI에 직접적인 영향을 끼치지 않는 값들을 갖고 있을 경우
- Ref 는 찹조값이 바뀌었다고 재실행 되지 않는다.
- DOM 요소에 직접적인 접근일 필요 할 때 (Ref)
