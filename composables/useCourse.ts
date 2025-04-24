import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import courseData from './courseData'

export function useCourse() {
  const route = useRoute()
  const course = ref(courseData)

  const chapter = computed(() => {
    return course.value?.chapters?.find(
      (c) => c.slug === route.params.chapterSlug
    ) ?? null
  })

  const lesson = computed(() => {
    return chapter.value?.lessons?.find(
      (l) => l.slug === route.params.lessonSlug
    ) ?? null
  })

  const chapters = computed(() => course.value.chapters)

  return {
    course,
    chapter,
    lesson,
    chapters
  }
}
