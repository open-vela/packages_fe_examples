const state = {
  devices: [
    { id: 1, name: "客厅灯", type: "light", status: true, value: 60, mode: "阅读" },
    { id: 2, name: "卧室空调", type: "ac", status: false, value: 26, mode: "制冷", fan: "中" },
    { id: 3, name: "客厅电视", type: "tv", status: true, channel: 12 },
    { id: 4, name: "空气净化器", type: "purifier", status: false, value: 40, mode: "自动" }
  ]
};

function getDevices() {
  return state.devices.map(d => ({ ...d }));
}

function getDeviceById(id) {
  return state.devices.find(d => d.id === id);
}

function updateDevice(id, patch) {
  const d = getDeviceById(id);
  if (d) {
    Object.assign(d, patch);
  }
}

export default { state, getDevices, getDeviceById, updateDevice };