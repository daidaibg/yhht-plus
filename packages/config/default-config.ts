export type AnimationType = 'ripple' | 'test' 
export default {
    classPrefix: 'yh',
    animation: {
        include: ['ripple', 'test'],
        exclude: []
      } as Record<'include'|'exclude', Array<AnimationType>>,
}