<template>
  <div class="timeline">
    <div v-for="(event, index) in timelineEvents" :key="index" class="timeline-event">
      <div class="timeline-event-header">
        <h3>{{ event.title }}</h3>
        <span>{{ event.date }}</span>
      </div>
      <div class="timeline-event-content">
        <p>{{ event.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timelineEvents: [
        {
          title: "Project 1",
          date: "2023-01-15",
          description: "Description of project 1.",
        },
        {
          title: "Project 2",
          date: "2023-06-20",
          description: "Description of project 2.",
        },
        // Add more timeline events as needed
      ],
    };
  },
};
</script>

<style>
.timeline {
  display: flex;
  flex-direction: column;
}

.timeline-event {
  border-left: 2px solid #007bff; /* Change color as needed */
  margin-bottom: 20px;
  padding-left: 10px;
}

.timeline-event-header {
  display: flex;
  justify-content: space-between;
}

.timeline-event-header h3 {
  margin: 0;
}

.timeline-event-content {
  margin-top: 5px;
}
</style>