<template>
  <div>
    <admin-header></admin-header>
    <admin-sidebar></admin-sidebar>
    <admin-main></admin-main>
  </div>
</template>

<script>
import AdminHeader from '@/components/admin/layouts/AdminHeader'
import AdminSidebar from '@/components/admin/layouts/AdminSidebar'
import AdminMain from '@/components/admin/layouts/AdminMain'

export default {
  components: {
    AdminHeader, AdminSidebar, AdminMain
  }
}
</script>
