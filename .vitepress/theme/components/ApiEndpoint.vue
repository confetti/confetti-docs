<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next'

defineProps<{
  method: string
  path: string
}>()
</script>

<template>
  <div class="api-endpoint">
    <span :class="['api-method', `method-${method.toLowerCase()}`]">{{ method }}</span>
    <code class="api-path">{{ path }}</code>
    <a
      :href="`https://api.confetti.events${path.replace(/:id/, '1')}`"
      target="_blank"
      rel="noopener"
      class="api-link"
      title="Open in browser"
    >
      <ExternalLink :size="14" />
    </a>
  </div>
</template>

<style scoped>
.api-endpoint {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  margin: 4px 0 20px;
  font-size: 14px;
}

.api-method {
  font-weight: 700;
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.method-get {
  background: rgba(52, 211, 153, 0.14);
  color: #059669;
}

.method-post {
  background: rgba(59, 130, 246, 0.14);
  color: #2563eb;
}

.method-put,
.method-patch {
  background: rgba(251, 191, 36, 0.14);
  color: #d97706;
}

.method-delete {
  background: rgba(239, 68, 68, 0.14);
  color: #dc2626;
}

.dark .method-get {
  color: #34d399;
}

.dark .method-post {
  color: #60a5fa;
}

.dark .method-put,
.dark .method-patch {
  color: #fbbf24;
}

.dark .method-delete {
  color: #f87171;
}

.api-path {
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  color: var(--vp-c-text-1);
  background: none !important;
  padding: 0;
}

.api-link {
  display: inline-flex;
  align-items: center;
  color: var(--vp-c-text-3);
  transition: color 0.2s;
  margin-left: auto;
}

.api-link:hover {
  color: var(--vp-c-brand-1);
}
</style>
