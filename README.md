



NOTE: if necessary for unknown server locations already using port 3000
sudo lsof -i :3000
this will list all PID listening on this port, once you have the PID you can terminate it with the following:

kill -9 <PID>
where you replace <PID> by the process ID, or the list of process IDs, the previous command output.