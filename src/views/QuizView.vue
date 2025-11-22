<script setup>
import { useRoute, useRouter } from 'vue-router';
import quizzes from "../data/quizzes.json"

const route = useRoute()
const router = useRouter()

const quizId = parseInt(route.params.id)
const quiz = quizzes.find(q => q.id === quizId)

</script>

<template>
    <h1>Quiz View</h1>
    <p>{{ quiz.name }}</p>
    
</template>